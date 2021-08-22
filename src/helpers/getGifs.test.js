const getGifs = require("./getGifs")
// @ponicode
describe("getGifs.getGifs", () => {
    test("0", async () => {
        await getGifs.getGifs("The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design")
    })

    test("1", async () => {
        await getGifs.getGifs("New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart")
    })

    test("2", async () => {
        await getGifs.getGifs("The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality")
    })

    test("3", async () => {
        await getGifs.getGifs("The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J")
    })

    test("4", async () => {
        await getGifs.getGifs("Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
    })

    test("5", async () => {
        await getGifs.getGifs(undefined)
    })
})
