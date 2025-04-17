let gold = document.querySelector('.gold-bank')
let parsedGold = parseFloat(gold.innerHTML)
let upgradeElement = document.querySelector('.upgrade');
let upgrade01Cost = document.querySelector('.upgrade01Cost')
let parsedUpgrade01Cost = parseFloat(upgrade01Cost.innerHTML)
let upgrade01level = document.querySelector('.upgrade01level')
let parsedUpgrade01Level = parseFloat(upgrade01level.innerHTML)

let clickPower = 1

function incrementGold() {
    parsedGold += clickPower
    gold.innerHTML = parsedGold
}

function buyUpgrade() {
    if (parsedGold >= parsedUpgrade01Cost) {
        parsedGold -= parsedUpgrade01Cost
        gold.innerHTML = parsedGold
        parsedUpgrade01Cost += 10 
        upgrade01Cost.innerHTML = parsedUpgrade01Cost
        parsedUpgrade01Level += 1 
        upgrade01level.innerHTML = parsedUpgrade01Level
        clickPower += 1
    } else {
        upgradeElement.classList.add('upgrade-invalid')
        setTimeout(() => {
            upgradeElement.classList.remove('upgrade-invalid');
        }, 300);
    }
}