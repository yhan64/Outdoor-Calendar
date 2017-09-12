const request = require('request')
const cheerioAdv = require('cheerio-advanced-selectors')
const cheerio = cheerioAdv.wrap(require('cheerio'))

export default class HHWCrawler {
  startUrl = 'http://www.honghuworld.com/activity'

}