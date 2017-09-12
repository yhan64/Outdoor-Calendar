import request from 'request-promise'
import cheerio from './utils/cheerio'
import db from './db';
import URLParser from 'url-parse'


// const url = "http://www.honghuworld.com/activity/show/316"

const crawler_sources = {
  HHW: 'honghuworld'
}
//TODO: put this inside of a class including crawlHHW as well
const crawlers_list = [
  {
    host: crawler_sources.HHW_ACT,
    start_url: 'http://www.honghuworld.com/activity',
    crawl_func: crawlHHW
  }
]

foo()()

function foo() {
  return async () => {
    await crawler()
  }
};

//TODO: go through start_urls_list to crawl using every given func in the object
async function crawler() {
  const crawler = crawlers_list[0]
  crawler.crawl_func(crawler.start_url)
}

//TODO: put this inside of a class including all needed resources as well
async function crawlHHW(start_url) {
  let eventsOverviewPageList = []
  let eventsUrlList = []
  let $ = cheerio.load(start_url)
  eventsOverviewPageList.push(start_url)
  //TODO: add other list page urls to listPageList
  for( let i = 0; i < eventsOverviewPageList.length; ++i) {
    await getEventsUrlListFromUrl(eventsOverviewPageList[i], eventsUrlList)
  }
  console.log(eventsUrlList)
  for( let i = 0; i < eventsUrlList.length; ++i) {
    await saveEventFromURLToDB(eventsUrlList[i])
  }
}

async function getEventsUrlListFromUrl(overviewPage, eventsUrlList) {
  let newEventUrlList = []
  await request.get(overviewPage, async (err, res, body) => {
    if(res.statusCode !== 200) {
      return
    }
    const url = new URLParser(overviewPage)
    const baseUrl = url.protocol + "//" + url.hostname;
    newEventUrlList = getEventsUrlListFromHtml(body, baseUrl)
    
  })
  Array.prototype.push.apply(eventsUrlList, newEventUrlList)
}


// get a list of activit urls from given overview page
function getEventsUrlListFromHtml(overviewPageHtml, baseUrl) {
  let eventsUrlList = []
  const $ = cheerio.load(overviewPageHtml, { decodeEntities: false })
  const ulList = $('ul','.eventlist_con_box2_inner_left2').children()
  ulList.each( function (i, element) {
    eventsUrlList.push(baseUrl + $(element).attr('href'))
    // console.log(eventsUrlList)
  })
  return eventsUrlList
}

async function saveEventFromURLToDB(url) {
  await request.get(url, async (err, res, body) => {
    if(res.statusCode !== 200) {
      return
    }
    const event = parseHHWActPage(body)
    event.source = url
    await saveEventFromObjToDB(event)
  })
}

async function saveEventFromObjToDB(event) {
  const existingEvents = await db('events').select('id').where('source', event.source).then()
  if (existingEvents.length < 1) {
    await db('events').insert(event)
    .then()
    .then(() => {
      console.info('INSERTED event: \"' + event.title + '\"')
    })
    .catch((e) => {
      console.log(e)
    });
    return
  }
  await db('events').where('source', event.source).update(event)
  console.info('UPDATED event: \"' + event.title + '\"')
}




function parseHHWActPage(html) {
  const $ = cheerio.load(html, { decodeEntities: false })
  const title = $('span', '.blame_con_box1_inner_title').text()
  const start_date = $('.pay_con_box2_inner_left1_detail1:eq(1) > em:eq(0)').text().split('：')[1]
  const end_date = $('.pay_con_box2_inner_left1_detail1:eq(1) > em:eq(1)').text().split('：')[1]
  const description = $('.eventinner_con_box2_inner_left_detail1_content_inner:eq(0) > span').html().split('<br>')
  const event = {
    title,
    start_date,
    end_date,
    description: {
      descriptionList: description
    }
  }
  return event
}