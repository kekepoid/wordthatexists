// All cats are beautiful

function startsWithCapital(word) {
    return word.charAt(0) === word.charAt(0).toUpperCase()
}

function capitalizeFirst(str) {
    if (!str) return
    return str.match("^[a-z\u0400-\u04FF]") ? str.charAt(0).toUpperCase() + str.substring(1) : str
}

function replaceValue(node, replace_data) {
    let value = node.nodeValue

    Object.keys(replace_data).forEach(entry => {
        const re = new RegExp(entry, 'gi')
        value = value.replace(re, startsWithCapital(value) ? capitalizeFirst(replace_data[entry]) : replace_data[entry])
    })

    node.nodeValue = value
}

function replaceAndBoldifyText(node, replace_data) {
    let value = node.innerText

    Object.keys(replace_data).forEach(entry => {
        const re = new RegExp(entry, 'gi')
        value = value.replace(re, startsWithCapital(value) ? capitalizeFirst(replace_data[entry]) : replace_data[entry])
    })


    node.innerHTML = `<b>${value}</b>`
}


function replaceInElementByTagName(tagName, replace_data) {
    let elements = [...document.body.getElementsByTagName(tagName)]

    elements = elements.filter(element => element.nodeType === Element.ELEMENT_NODE)

    const elementsToReplace = []

    elements.forEach(element => {
        const parentNode = element.parentNode

        if (parentNode.innerHTML.includes("операц") && !elementsToReplace.includes(parentNode.innerHTML)) {
            elementsToReplace.push(parentNode)
        }
    })


    elementsToReplace.forEach(element => {
        replaceAndBoldifyText(element, replace_data)
    })
}

function replaceInAllElements(replace_data) {
    const elementsInsideBody = [...document.body.getElementsByTagName('*')]

    elementsInsideBody.forEach(element => {
        element.childNodes.forEach(child => {
            if (child.nodeType === Text.TEXT_NODE) {
                replaceValue(child, replace_data)
            }
        })

    })
}

function run() {
    const replace_data = {
        "специальная военная операция на Украине": "война на Украине",
        "от специальной военной операции на Украине": "от войны на Украине ",
        "до специальной военной операции на Украине": "до войны на Украине",
        "из специальной военной операции на Украине": "из войны на Украине",
        "с специальной военной операции на Украине": "с войны на Украине",
        "со специальной военной операции на Украине": "с войны на Украине",
        "у специальной военной операции на Украине": "у войны на Украине",
        "без специальной военной операции на Украине": "без войны на Украине",
        "вокруг специальной военной операции на Украине": "вокруг войны на Украине",
        "к специальной военной операции на Украине": "к войне на Украине",
        "по специальной военной операции на Украине": "по войне на Украине",
        "про специальную военную операцию на Украине": "про войну на Украине",
        "через специальную военную операцию на Украине": "через войну на Украине",
        "в специальную военную операцию на Украине": "в войну на Украине",
        "на специальную военную операцию на Украине": "на войну на Украине",
        "за специальную военную операцию на Украине": "за войну на Украине",
        "с специальной военной операцией на Украине": "с войной на Украине",
        "со специальной военной операцией на Украине": "с войной на Украине",
        "за специальной военной операцией на Украине": "за войной на Украине",
        "под специальной военной операцией на Украине": "под войной на Украине",
        "над специальной военной операцией на Украине": "над войной на Украине",
        "между специальной военной операцией на Украине": "между войной на Украине",
        "об специальной военной операции на Украине": "об войне на Украине",
        "при специальной военной операции на Украине": "при войне на Украине",
        "о специальной военной операции на Украине": "о войне на Украине",
        "в специальной военной операции на Украине": "в войне на Украине",
        "на специальной военной операции на Украине": "на войне на Украине",

        "специальная военная операция в Украине": "война в Украине",
        "от специальной военной операции в Украине": "от войны в Украине ",
        "до специальной военной операции в Украине": "до войны в Украине",
        "из специальной военной операции в Украине": "из войны в Украине",
        "с специальной военной операции в Украине": "с войны в Украине",
        "со специальной военной операции в Украине": "с войны в Украине",
        "у специальной военной операции в Украине": "у войны в Украине",
        "без специальной военной операции в Украине": "без войны в Украине",
        "вокруг специальной военной операции в Украине": "вокруг войны в Украине",
        "к специальной военной операции в Украине": "к войне в Украине",
        "по специальной военной операции в Украине": "по войне в Украине",
        "про специальную военную операцию в Украине": "про войну в Украине",
        "через специальную военную операцию в Украине": "через войну в Украине",
        "в специальную военную операцию в Украине": "в войну в Украине",
        "на специальную военную операцию в Украине": "на войну в Украине",
        "за специальную военную операцию в Украине": "за войну в Украине",
        "с специальной военной операцией в Украине": "с войной в Украине",
        "со специальной военной операцией в Украине": "с войной в Украине",
        "за специальной военной операцией в Украине": "за войной в Украине",
        "под специальной военной операцией в Украине": "под войной в Украине",
        "над специальной военной операцией в Украине": "над войной в Украине",
        "между специальной военной операцией в Украине": "между войной в Украине",
        "об специальной военной операции в Украине": "об войне в Украине",
        "при специальной военной операции в Украине": "при войне в Украине",
        "о специальной военной операции в Украине": "о войне в Украине",
        "в специальной военной операции в Украине": "в войне в Украине",
        "на специальной военной операции в Украине": "на войне в Украине",

        "специальная военная операция": "война",
        "от специальной военной операции": "от войны",
        "до специальной военной операции": "до войны",
        "из специальной военной операции": "из войны",
        "с специальной военной операции": "с войны",
        "со специальной военной операции": "с войны",
        "у специальной военной операции": "у войны",
        "без специальной военной операции": "без войны",
        "вокруг специальной военной операции": "вокруг войны",
        "к специальной военной операции": "к войне",
        "по специальной военной операции": "по войне",
        "про специальную военную операцию": "про войну",
        "через специальную военную операцию": "через войну",
        "в специальную военную операцию": "в войну",
        "на специальную военную операцию": "на войну",
        "за специальную военную операцию": "за войну",
        "с специальной военной операцией": "с войной",
        "со специальной военной операцией": "с войной",
        "за специальной военной операцией": "за войной",
        "под специальной военной операцией": "под войной",
        "над специальной военной операцией": "над войной",
        "между специальной военной операцией": "между войной",
        "об специальной военной операции": "об войне",
        "при специальной военной операции": "при войне",
        "о специальной военной операции": "о войне",
        "в специальной военной операции": "в войне",
        "на специальной военной операции": "на войне",

        "военная спецоперация на Украине": "война на Украине",
        "от военной спецоперации на Украине": "от войны на Украине",
        "до военной спецоперации на Украине": "до войны на Украине",
        "из военной спецоперации на Украине": "из войны на Украине",
        "с военной спецоперации на Украине": "с войны на Украине",
        "у военной спецоперации на Украине": "у войны на Украине",
        "без военной спецоперации на Украине": "без войны на Украине",
        "вокруг военной спецоперации на Украине": "вокруг войны на Украине",
        "к военной спецоперации на Украине": "к войне на Украине",
        "по военной спецоперации на Украине": "по войне на Украине",
        "про военную спецоперацию на Украине": "про войну на Украине",
        "через военную спецоперацию на Украине": "через войну на Украине",
        "в военную спецоперацию на Украине": "в войну на Украине",
        "на военную спецоперацию на Украине": "на войну на Украине",
        "за военную спецоперацию на Украине": "за войну на Украине",
        "с военной спецоперацией на Украине": "с войной на Украине",
        //   "со военная спецоперацией на Украине": "с войной на Украине",
        "за военной спецоперацией на Украине": "за войной на Украине",
        "под военной спецоперацией на Украине": "под войной на Украине",
        "над военной спецоперацией на Украине": "над войной на Украине",
        "между военной спецоперацией на Украине": "между войной на Украине",
        "об военной спецоперации на Украине": "об войне на Украине",
        "при военной спецоперации на Украине": "при войне на Украине",
        "о военной спецоперации на Украине": "о войне на Украине",
        "в военной спецоперации на Украине": "в войне на Украине",
        "на военной спецоперации на Украине": "на войне на Украине",

        "военная спецоперация в Украине": "война в Украине",
        "от военной спецоперации в Украине": "от войны в Украине",
        "до военной спецоперации в Украине": "до войны в Украине",
        "из военной спецоперации в Украине": "из войны в Украине",
        "с военной спецоперации в Украине": "с войны в Украине",
        "у военной спецоперации в Украине": "у войны в Украине",
        "без военной спецоперации в Украине": "без войны в Украине",
        "вокруг военной спецоперации в Украине": "вокруг войны в Украине",
        "к военной спецоперации в Украине": "к войне в Украине",
        "по военной спецоперации в Украине": "по войне в Украине",
        "про военную спецоперацию в Украине": "про войну в Украине",
        "через военную спецоперацию в Украине": "через войну в Украине",
        "в военную спецоперацию в Украине": "в войну в Украине",
        "на военную спецоперацию в Украине": "на войну в Украине",
        "за военную спецоперацию в Украине": "за войну в Украине",
        "с военной спецоперацией в Украине": "с войной в Украине",
        "за военной спецоперацией в Украине": "за войной в Украине",
        "под военной спецоперацией в Украине": "под войной в Украине",
        "над военной спецоперацией в Украине": "над войной в Украине",
        "между военной спецоперацией в Украине": "между войной в Украине",
        "об военной спецоперации в Украине": "об войне в Украине",
        "при военной спецоперации в Украине": "при войне в Украине",
        "о военной спецоперации в Украине": "о войне в Украине",
        "в военной спецоперации в Украине": "в войне в Украине",
        "на военной спецоперации в Украине": "на войне в Украине",

        "спецоперация России на Украине": "война России на Украине",
        "от спецоперации России на Украине": "от войны России на Украине",
        "до спецоперации России на Украине": "до войны России на Украине",
        "из спецоперации России на Украине": "из войны России на Украине",
        "с спецоперации России на Украине": "с войны России на Украине",
        "у спецоперации России на Украине": "у войны России на Украине",
        "без спецоперации России на Украине": "без войны России на Украине",
        "вокруг спецоперации России на Украине": "вокруг войны России на Украине",
        "к спецоперации России на Украине": "к войне России на Украине",
        "по спецоперации России на Украине": "по войне России на Украине",
        "про спецоперацию России на Украине": "про войну России на Украине",
        "через спецоперацию России на Украине": "через войну России на Украине",
        "в спецоперацию России на Украине": "в войну России на Украине",
        "на спецоперацию России на Украине": "на войну России на Украине",
        "за спецоперацию России на Украине": "за войну России на Украине",
        "с спецоперацией России на Украине": "с войной России на Украине",
        "со спецоперацией России на Украине": "с войной России на Украине",
        "за спецоперацией России на Украине": "за войной России на Украине",
        "под спецоперацией России на Украине": "под войной России на Украине",
        "над спецоперацией России на Украине": "над войной России на Украине",
        "между спецоперацией России на Украине": "между войной России на Украине",
        "об спецоперации России на Украине": "об войне России на Украине",
        "при спецоперации России на Украине": "при войне России на Украине",
        "о спецоперации России на Украине": "о войне России на Украине",
        "в спецоперации России на Украине": "в войне России на Украине",
        "на спецоперации России на Украине": "на войне России на Украине",

        "спецоперация России в Украине": "война России в Украине",
        "от спецоперации России в Украине": "от войны России в Украине",
        "до спецоперации России в Украине": "до войны России в Украине",
        "из спецоперации России в Украине": "из войны России в Украине",
        "с спецоперации России в Украине": "с войны России в Украине",
        "у спецоперации России в Украине": "у войны России в Украине",
        "без спецоперации России в Украине": "без войны России в Украине",
        "вокруг спецоперации России в Украине": "вокруг войны России в Украине",
        "к спецоперации России в Украине": "к войне России в Украине",
        "по спецоперации России в Украине": "по войне России в Украине",
        "про спецоперацию России в Украине": "про войну России в Украине",
        "через спецоперацию России в Украине": "через войну России в Украине",
        "в спецоперацию России в Украине": "в войну России в Украине",
        "на спецоперацию России в Украине": "на войну России в Украине",
        "за спецоперацию России в Украине": "за войну России в Украине",
        "с спецоперацией России в Украине": "с войной России в Украине",
        "со спецоперацией России в Украине": "с войной России в Украине",
        "за спецоперацией России в Украине": "за войной России в Украине",
        "под спецоперацией России в Украине": "под войной России в Украине",
        "над спецоперацией России в Украине": "над войной России в Украине",
        "между спецоперацией России в Украине": "между войной России в Украине",
        "об спецоперации России в Украине": "об войне России в Украине",
        "при спецоперации России в Украине": "при войне России в Украине",
        "о спецоперации России в Украине": "о войне России в Украине",
        "в спецоперации России в Украине": "в войне России в Украине",
        "на спецоперации России в Украине": "на войне России в Украине",

        "Российская спецоперация на Украине": "война на Украине",
        "от Российской спецоперации на Украине": "от войны на Украине",
        "до Российской спецоперации на Украине": "до войны на Украине",
        "из Российской спецоперации на Украине": "из войны на Украине",
        "с Российской спецоперации на Украине": "с войны на Украине",
        "у Российской спецоперации на Украине": "у войны на Украине",
        "без Российской спецоперации на Украине": "без войны на Украине",
        "вокруг Российской спецоперации на Украине": "вокруг войны на Украине",
        "к Российской спецоперации на Украине": "к войне на Украине",
        "по Российской спецоперации на Украине": "по войне на Украине",
        "про Российскую спецоперацию на Украине": "про войну на Украине",
        "через Российскую спецоперацию на Украине": "через войну на Украине",
        "в Российскую спецоперацию на Украине": "в войну на Украине",
        "с Российской спецоперацией на Украине": "с войной на Украине",
        //   "со спецоперацией на Украине": "с войной на Украине",
        "за Российской спецоперацией на Украине": "за войной на Украине",
        "под Российской спецоперацией на Украине": "под войной на Украине",
        "над Российской спецоперацией на Украине": "над войной на Украине",
        "между Российской спецоперацией на Украине": "между войной на Украине",
        "об Российской спецоперации на Украине": "об войне на Украине",
        "при Российской спецоперации на Украине": "при войне на Украине",
        "о Российской спецоперации на Украине": "о войне на Украине",
        "в Российской спецоперации на Украине": "в войне на Украине",
        "на Российской спецоперации на Украине": "на войне на Украине",

        "Российская спецоперация в Украине": "война в Украине",
        "от Российской спецоперации в Украине": "от войны в Украине",
        "до Российской спецоперации в Украине": "до войны в Украине",
        "из Российской спецоперации в Украине": "из войны в Украине",
        "с Российской спецоперации в Украине": "с войны в Украине",
        "у Российской спецоперации в Украине": "у войны в Украине",
        "без Российской спецоперации в Украине": "без войны в Украине",
        "вокруг Российской спецоперации в Украине": "вокруг войны в Украине",
        "к Российской спецоперации в Украине": "к войне в Украине",
        "по Российской спецоперации в Украине": "по войне в Украине",
        "про Российскую спецоперацию в Украине": "про войну в Украине",
        "через Российскую спецоперацию в Украине": "через войну в Украине",
        "в Российскую спецоперацию в Украине": "в войну в Украине",
        "с Российской спецоперацией в Украине": "с войной в Украине",
        //   "со спецоперацией в Украине": "с войной в Украине",
        "за Российской спецоперацией в Украине": "за войной в Украине",
        "под Российской спецоперацией в Украине": "под войной в Украине",
        "над Российской спецоперацией в Украине": "над войной в Украине",
        "между Российской спецоперацией в Украине": "между войной в Украине",
        "об Российской спецоперации в Украине": "об войне в Украине",
        "при Российской спецоперации в Украине": "при войне в Украине",
        "о Российской спецоперации в Украине": "о войне в Украине",
        "в Российской спецоперации в Украине": "в войне в Украине",
        "на Российской спецоперации в Украине": "на войне в Украине",

        "спецоперация на Украине": "война на Украине",
        "от спецоперации на Украине": "от войны на Украине",
        "до спецоперации на Украине": "до войны на Украине",
        "из спецоперации на Украине": "из войны на Украине",
        "с спецоперации на Украине": "с войны на Украине",
        "у спецоперации на Украине": "у войны на Украине",
        "без спецоперации на Украине": "без войны на Украине",
        "вокруг спецоперации на Украине": "вокруг войны на Украине",
        "к спецоперации на Украине": "к войне на Украине",
        "по спецоперации на Украине": "по войне на Украине",
        "про спецоперацию на Украине": "про войну на Украине",
        "через спецоперацию на Украине": "через войну на Украине",
        "в спецоперацию на Украине": "в войну на Украине",
        "на спецоперацию на Украине": "на войну на Украине",
        "за спецоперацию на Украине": "за войну на Украине",
        "с спецоперацией на Украине": "с войной на Украине",
        "со спецоперацией на Украине": "с войной на Украине",
        "за спецоперацией на Украине": "за войной на Украине",
        "под спецоперацией на Украине": "под войной на Украине",
        "над спецоперацией на Украине": "над войной на Украине",
        "между спецоперацией на Украине": "между войной на Украине",
        "об спецоперации на Украине": "об войне на Украине",
        "при спецоперации на Украине": "при войне на Украине",
        "о спецоперации на Украине": "о войне на Украине",
        "в спецоперации на Украине": "в войне на Украине",
        "на спецоперации на Украине": "на войне на Украине",

        "конфликт на Украине": "война на Украине",
        "от конфликта на Украине": "от войны на Украине",
        "до конфликта на Украине": "до войны на Украине",
        "из конфликта на Украине": "из войны на Украине",
        "с конфликта на Украине": "с войны на Украине",
        "у конфликта на Украине": "у войны на Украине",
        "без конфликта на Украине": "без войны на Украине",
        "вокруг конфликта на Украине": "вокруг войны на Украине",
        "к конфликту на Украине": "к войне на Украине",
        "по конфликту на Украине": "по войне на Украине",
        "про конфликт на Украине": "про войну на Украине",
        "через конфликт на Украине": "через войну на Украине",
        "в конфликт на Украине": "в войну на Украине",
        "на конфликт на Украине": "на войну на Украине",
        "за конфликт на Украине": "за войну на Украине",
        "с конфликтом на Украине": "с войной на Украине",
        "за конфликтом на Украине": "за войной на Украине",
        "под конфликтом на Украине": "под войной на Украине",
        "над конфликтом на Украине": "над войной на Украине",
        "между конфликтом на Украине": "между войной на Украине",
        "об конфликте на Украине": "об войне на Украине",
        "при конфликте на Украине": "при войне на Украине",
        "о конфликте на Украине": "о войне на Украине",
        "в конфликте на Украине": "в войне на Украине",
        "на конфликте на Украине": "на войне на Украине",

        "конфликт в Украине": "война в Украине",
        "от конфликта в Украине": "от войны в Украине",
        "до конфликта в Украине": "до войны в Украине",
        "из конфликта в Украине": "из войны в Украине",
        "с конфликта в Украине": "с войны в Украине",
        "у конфликта в Украине": "у войны в Украине",
        "без конфликта в Украине": "без войны в Украине",
        "вокруг конфликта в Украине": "вокруг войны в Украине",
        "к конфликту в Украине": "к войне в Украине",
        "по конфликту в Украине": "по войне в Украине",
        "про конфликт в Украине": "про войну в Украине",
        "через конфликт в Украине": "через войну в Украине",
        "в конфликт в Украине": "в войну в Украине",
        "на конфликт в Украине": "на войну в Украине",
        "за конфликт в Украине": "за войну в Украине",
        "с конфликтом в Украине": "с войной в Украине",
        "за конфликтом в Украине": "за войной в Украине",
        "под конфликтом в Украине": "под войной в Украине",
        "над конфликтом в Украине": "над войной в Украине",
        "между конфликтом в Украине": "между войной в Украине",
        "об конфликте в Украине": "об войне в Украине",
        "при конфликте в Украине": "при войне в Украине",
        "о конфликте в Украине": "о войне в Украине",
        "в конфликте в Украине": "в войне в Украине",
        "на конфликте в Украине": "на войне в Украине",

        "спецоперация в Украине": "война в Украине",
        "от спецоперации в Украине": "от войны в Украине",
        "до спецоперации в Украине": "до войны в Украине",
        "из спецоперации в Украине": "из войны в Украине",
        "с спецоперации в Украине": "с войны в Украине",
        "у спецоперации в Украине": "у войны в Украине",
        "без спецоперации в Украине": "без войны в Украине",
        "вокруг спецоперации в Украине": "вокруг войны в Украине",
        "к спецоперации в Украине": "к войне в Украине",
        "по спецоперации в Украине": "по войне в Украине",
        "про спецоперацию в Украине": "про войну в Украине",
        "через спецоперацию в Украине": "через войну в Украине",
        "в спецоперацию в Украине": "в войну в Украине",
        "на спецоперацию в Украине": "на войну в Украине",
        "за спецоперацию в Украине": "за войну в Украине",
        "с спецоперацией в Украине": "с войной в Украине",
        "со спецоперацией в Украине": "с войной в Украине",
        "за спецоперацией в Украине": "за войной в Украине",
        "под спецоперацией в Украине": "под войной в Украине",
        "над спецоперацией в Украине": "над войной в Украине",
        "между спецоперацией в Украине": "между войной в Украине",
        "об спецоперации в Украине": "об войне в Украине",
        "при спецоперации в Украине": "при войне в Украине",
        "о спецоперации в Украине": "о войне в Украине",
        "в спецоперации в Украине": "в войне в Украине",
        "на спецоперации в Украине": "на войне в Украине",

        "о военной спецоперации": "о войне",

        "военная операция": "война",
        "от военной операции": "от войны",
        "до военной операции": "до войны",
        "из военной операции": "из войны",
        "с военной операции": "с войны",
        "у военной операции": "у войны",
        "без военной операции": "без войны",
        "вокруг военной операции": "вокруг войны",
        "к военной операции": "к войне",
        "по военной операции": "по войне",
        "про военную операцию": "про войну",
        "через военную операцию": "через войну",
        "в военную операцию": "в войну",
        "на военную операцию": "на войну",
        "за военную операцию": "за войну",
        "с военной операцией": "с войной",
        "за военной операцией": "за войной",
        "под военной операцией": "под войной",
        "над военной операцией": "над войной",
        "между военной операцией": "между войной",
        "об военной операции": "об войне",
        "при военной операции": "при войне",
        "о военной операции": "о войне",
        "в военной операции": "в войне",
        "на военной операции": "на войне",
    }
    replaceInElementByTagName("b", replace_data)
    replaceInElementByTagName("em", replace_data)
    replaceInAllElements(replace_data)
}

document.addEventListener("DOMContentLoaded", run)

/*
Тот, кто любит цветы,
Тот, естественно, пулям не нравится.
Пули — леди ревнивые.
Стоит ли ждать доброты?
Девятнадцатилетняя Аллисон Краузе,
Ты убита за то, что любила цветы.

Это было Чистейших надежд выражение,
В миг, Когда, беззащитна, как совести тоненький пульс,
Ты вложила цветок
В держимордово дуло ружейное
И сказала: «Цветы лучше пуль».

Не дарите цветов государству,
Где правда карается.
Государства такого отдарок циничен, жесток.
И отдарком была тебе, Аллисон Краузе,
Пуля,
Вытолкнувшая цветок.

Пусть все яблони мира
Не в белое — в траур оденутся!
Ах, как пахнет сирень,
Но не чувствуешь ты ничего.
Как сказал президент про тебя,
Ты «бездельница».
Каждый мертвый — бездельник,
Но это вина не его.

Встаньте, девочки Токио,
Мальчики Рима,
Поднимайте цветы
Против общего злого врага!
Дуньте разом на все одуванчики мира!
О, какая великая будет пурга!

Собирайтесь, цветы, на войну!
Покарайте карателей!
За тюльпаном тюльпан,
За левкоем левкой,
Вырываясь от гнева
Из клумб аккуратненьких,
Глотки всех лицемеров
Заткните корнями с землей!

Ты опутай, жасмин,
Миноносцев подводные лопасти!
Залепляя прицелы,
Ты в линзы отчаянно впейся, репей!
Встаньте, лилии Ганга И нильские лотосы,
И скрутите винты самолетов,
Беременных смертью детей!

Розы, вы не гордитесь, Когда продадут подороже!
Пусть приятно касаться
Девической нежной щеки, —
Бензобаки Прокалывайте Бомбардировщикам!
Подлинней, поострей отрастите шипы!

Собирайтесь, цветы, на войну!
Защитите прекрасное!
Затопите шоссе и проселки,
Как армии грозный поток,
И в колонны людей и цветов
Встань, убитая Аллисон Краузе,
Как бессмертник эпохи — Протеста колючий цветок!
*/