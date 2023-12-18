import {type Cleanroom} from "../interfaces/Cleanroom"
import { type Estimate } from "@/interfaces/Estimate"
import { type SubscriptionType } from "@/interfaces/Subscription"

export class Subscription {
  async getCleanrooms(token: string): Promise<Cleanroom[]> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization:
          'Bearer ' + token
      },
    }

    return (await fetch('https://account.mytiki.com/api/latest/cleanroom', options)).json()
  }

  async estimate(name: string, query: string, id: string, token: string): Promise<Estimate>{
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization:
          'Bearer ' + token
      },
      body: JSON.stringify({ name: name, query: query, cleanroomId: id })
    }

    return (await (fetch('https://account.mytiki.com/api/latest/subscription', options))).json()
  }

  async getSubscription(id: string, token: string): Promise<SubscriptionType>  {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + token
      }
    };
    
    return (await (fetch('https://account.mytiki.com/api/latest/subscription/' + id, options))).json()
  }

  async subscribe(subscriptionId: string) {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        authorization:
          'Bearer token'
      }
    }

    const response = await fetch(
      `https://account.mytiki.com/api/latest/subscription/${subscriptionId}/purchase`,
      options
    )
  }
}
