var casual = require('casual')

module.exports = () => {
    const data = { videos: [] }
    for (let i = 0; i < 10; i++) {
      data.videos.push({ id: i, title:casual.title, description:casual.sentences(n=10), author:casual.name })
    }
    return data
  }