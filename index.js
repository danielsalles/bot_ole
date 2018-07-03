const axios = require('axios')

const requestProxy = () => axios.get('https://gimmeproxy.com/api/getProxy')

setInterval(async function () {
  try {
    const { data } = await requestProxy()

    const instance = axios.create({
      headers: {
        Accept: 'application/json',
        Origin: 'https://www.ole.com.ar',
        Referer: 'https://www.ole.com.ar/mundial-rusia-2018/mundial-hinchas-alentamos-seleccion-eliminada-brasil-uruguay-colombia-belgica-francia_0_2043395737.html',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'
      },
      proxy: {
        host: data.ip,
        port: data.port
      }
    })

    const vote = await instance.post('http://gr.playbuzz.com/GameReport/SectionVote', {
                        sectionId: '46e4f8e7-c352-4c68-bd1c-6bb8f833aa1b',
                        questionId: '47cc064d-cf35-495f-ae76-4a88f578d2f6',
                        resultId: '2466e214-fa91-47bb-9b56-932d1e12fc46',
                        recaptchaToken: 'undefined'
     })

     console.log('Votado no Braziu! HU3HU3HU3UH3HU3')
  } catch (e) {
    console.log('DEU MERDA MARRECO', e)
  }
}, 2000)
