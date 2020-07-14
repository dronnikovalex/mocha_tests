const { elementTextContains, elementLocated } = require('selenium-webdriver/lib/until');
const { Driver } = require('selenium-webdriver/edge');

let webdriver= require('selenium-webdriver'),
    key = webdriver.key,
    By = webdriver.By,
    until = webdriver.until,  
    wait = webdriver.wait,
    test = require('selenium-webdriver/testing');
    firefox = require('selenium-webdriver/firefox');


test.describe('Second practice test', function() {
  let driver;

  test.before(function() {
 
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build(); 
  });

  test.it('Chrome start', function() {
    driver.get('http://localhost/litecart/admin/');
    driver.findElement(By.css("input[name=username]")).sendKeys('admin');  
    driver.findElement(By.css("input[name=password]")).sendKeys('admin');  
    driver.findElement(By.css("button[name=login]")).click();
  });

  test.it('Get countries', function() { 
    driver.wait(until.elementLocated(By.css("[data-code=appearance] a")), 5000).click();
    driver.wait(until.elementLocated(By.css("[data-code=logotype]")), 5000).click();
  });

  test.it('Get pages', function() { 
      return driver.wait(until.elementLocated(By.css("[data-code=pages] a")), 5000).click()
      .then (_ => driver.findElement(By.css("div#content span1")))
      .catch(() => {
        console.log('mistake');
      });
  });
  
  test.it('Count stickers', () => {
    driver.get('http://localhost/litecart/');
    driver.wait(elementLocated(By.css("article.product-column")));
    driver.findElements(By.css("article.product-column"))
    .then (products => {
    for (let product in products) {
      products[product].findElements(By.css("div.sticker"))
      .then(stickers => {
        if (stickers.length = 1) { 
          products[product].findElement(By.css("div.name"))
          .then(attr => attr.getText())
          .then(text => console.log(text + ' has only one sticker'));
        } else {
          for (let sticker in stickers) {
            stickers[sticker].getAttribute("title")
            .then(attr => console.log(attr));
          }
        }
      });  
    }
    });
  });

  test.after(() => driver.quit());
});
