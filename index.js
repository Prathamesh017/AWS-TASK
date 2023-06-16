import { getSignedUrl } from '@aws-sdk/cloudfront-signer'
import dotenv from 'dotenv'

dotenv.config()
const getUrl = async () => {
  try {
    const url = getSignedUrl({
      url: 'https://d3htdhsgxnikbn.cloudfront.net/naruto.png',
      dateLessThan: new Date(Date.now() + 5 * 60 * 1000),
      privateKey: process.env.private_key,
      keyPairId: process.env.key_pair_id,
    })
    console.log(url)
  } catch (error) {
    console.log(error)
  }
}

getUrl()
