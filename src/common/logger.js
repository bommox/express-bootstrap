
function logger(tag) {
    tag = tag || ''
    return {
        log: m => console.log(`[${tag}] ${m}`),
        error: m => console.error(`[${tag} - ERROR] ${m}`)
    }
}

module.exports = logger
