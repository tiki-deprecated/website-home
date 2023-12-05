export class Subscription {
  async cleanroom(name: string) {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization:
          'Bearer eyJraWQiOiIwZDJkYmFkMC04MWY1LTQ2MjUtOTRhOC05MWU4Mzk1ODFhYzgiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL215dGlraS5jb20iLCJzdWIiOiJ1c2VyOjk0YWNmMTIyLWEzYTktNDQ5NS04M2U4LTI0MTk2YWE3ZjcxMyIsImF1ZCI6WyJ0cmFpbC5teXRpa2kuY29tIiwicHVibGlzaC5teXRpa2kuY29tIiwiYWNjb3VudC5teXRpa2kuY29tIl0sInNjcCI6WyJ0cmFpbCIsInB1Ymxpc2giLCJhY2NvdW50OmFkbWluIl0sImV4cCI6MTcwMjc2Mjc3OCwiaWF0IjoxNzAwMTcwNzc4fQ.LKKzHvyDtSHDycMuIhV0jFl4w7FI5jl4cEysUWc4lBw8b6nk3Wpye3iUmDIDeoxlTpq6Zr1FMICIWbVqBO42pg'
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
          'Bearer eyJraWQiOiIwZDJkYmFkMC04MWY1LTQ2MjUtOTRhOC05MWU4Mzk1ODFhYzgiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL215dGlraS5jb20iLCJzdWIiOiJ1c2VyOjk0YWNmMTIyLWEzYTktNDQ5NS04M2U4LTI0MTk2YWE3ZjcxMyIsImF1ZCI6WyJ0cmFpbC5teXRpa2kuY29tIiwicHVibGlzaC5teXRpa2kuY29tIiwiYWNjb3VudC5teXRpa2kuY29tIl0sInNjcCI6WyJ0cmFpbCIsInB1Ymxpc2giLCJhY2NvdW50OmFkbWluIl0sImV4cCI6MTcwMjc2Mjc3OCwiaWF0IjoxNzAwMTcwNzc4fQ.LKKzHvyDtSHDycMuIhV0jFl4w7FI5jl4cEysUWc4lBw8b6nk3Wpye3iUmDIDeoxlTpq6Zr1FMICIWbVqBO42pg'
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
          'Bearer eyJraWQiOiIwZDJkYmFkMC04MWY1LTQ2MjUtOTRhOC05MWU4Mzk1ODFhYzgiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL215dGlraS5jb20iLCJzdWIiOiJ1c2VyOjk0YWNmMTIyLWEzYTktNDQ5NS04M2U4LTI0MTk2YWE3ZjcxMyIsImF1ZCI6WyJ0cmFpbC5teXRpa2kuY29tIiwicHVibGlzaC5teXRpa2kuY29tIiwiYWNjb3VudC5teXRpa2kuY29tIl0sInNjcCI6WyJ0cmFpbCIsInB1Ymxpc2giLCJhY2NvdW50OmFkbWluIl0sImV4cCI6MTcwMjc2Mjc3OCwiaWF0IjoxNzAwMTcwNzc4fQ.LKKzHvyDtSHDycMuIhV0jFl4w7FI5jl4cEysUWc4lBw8b6nk3Wpye3iUmDIDeoxlTpq6Zr1FMICIWbVqBO42pg'
      }
    }

    const response = await fetch(
      `https://account.mytiki.com/api/latest/subscription/${subscriptionId}/purchase`,
      options
    )
  }
}
