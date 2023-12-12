export class Subscription {
  async cleanroom(name: string) {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization:
          'Bearer token'
      },
      body: JSON.stringify({ name: name })
    }

    const response = await fetch('https://account.mytiki.com/api/latest/cleanroom', options)
  }

  async estimate(name: string, query: string, id: string) {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization:
          'Bearer token'
      },
      body: JSON.stringify({ name: name, query: query, cleanroomId: id })
    }

    const response = await fetch('https://account.mytiki.com/api/latest/subscription', options)
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
