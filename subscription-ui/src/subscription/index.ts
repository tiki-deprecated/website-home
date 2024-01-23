import { type Cleanroom } from '../interfaces/Cleanroom'
import { type SubscriptionType } from '@/interfaces/Subscription'
import { type ProfileInfo } from '@/interfaces/ProfileInfo'

export class Subscription {

  private _interval: number = 0;

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

    let getSubscriptionResponse: SubscriptionType = await this.getSubscription(
      estimateResponse.subscriptionId,
      token!
    )

    let count = 10

    await new Promise((resolve) => {
      this._interval = setInterval(async () => {
        count--
        getSubscriptionResponse = await this.getSubscription(
          estimateResponse.subscriptionId,
          token!
        )
        if (
          count === 0 ||
          (getSubscriptionResponse.count[0].status === 'success' &&
            getSubscriptionResponse.sample[0].status === 'success')
        ) {
          resolve('')
          clearInterval(this._interval)
        }
      }, 10000)
    })

    if (
      getSubscriptionResponse.count[0].status !== 'success' ||
      getSubscriptionResponse.sample[0].status !== 'success'
    )
      throw new Error('Failure to consult the estimate')

    return getSubscriptionResponse
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

  cancel(){
    clearInterval(this._interval);
  }
}
