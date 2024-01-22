import { type Cleanroom } from '../interfaces/Cleanroom'
import { type SubscriptionType } from '@/interfaces/Subscription'
import { type ProfileInfo } from '@/interfaces/ProfileInfo'

export class Subscription {
  private _interval: number = 0

  async validate(token: string): Promise<ProfileInfo> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + token
      }
    }

    return (await fetch('https://account.mytiki.com/api/latest/profile', options)).json()
  }
  async getCleanrooms(token: string): Promise<Cleanroom[]> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer ' + token
      }
    }

    return (await fetch('https://account.mytiki.com/api/latest/cleanroom', options)).json()
  }

  async estimate(
    name: string,
    query: string,
    id: string,
    token: string
  ): Promise<SubscriptionType> {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer ' + token
      },
      body: JSON.stringify({ name: name, query: query, cleanroomId: id })
    }

    const estimateResponse: SubscriptionType = await (
      await fetch('https://account.mytiki.com/api/latest/subscription', options)
    ).json()

    if (!estimateResponse.subscriptionId) throw new Error('Failure to create an estimate')

    let count = 10

    return await new Promise((resolve, reject) => {
      this._interval = setInterval(async () => {
        count--
        console.log('count:', count)
        if (count === 0){
          reject('Failure to consult the estimate')
          clearInterval(this._interval)
        }
        let subscriptionResponse = await this.getSubscription(
          estimateResponse.subscriptionId,
          token!
        )
        console.log('subsresponse:',subscriptionResponse)
        if(subscriptionResponse.count[0]?.status === 'success' &&
           subscriptionResponse.sample[0]?.status === 'success'){
            resolve(subscriptionResponse)
            clearInterval(this._interval)
          }
      }, 10000)
    })
  }

  async getSubscription(id: string, token: string): Promise<SubscriptionType> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + token
      }
    }

    return (await fetch('https://account.mytiki.com/api/latest/subscription/' + id, options)).json()
  }

  async subscribe(subscriptionId: string, token: string): Promise<SubscriptionType> {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + token
      }
    }

    return (
      await fetch(
        `https://account.mytiki.com/api/latest/subscription/${subscriptionId}/purchase`,
        options
      )
    ).json()
  }

  cancel() {
    clearInterval(this._interval)
  }
}
