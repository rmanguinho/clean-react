import { HttpPostParams, HttpResponse, HttpPostClient, HttpGetParams } from '@/data/protocols/http'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpPostClient {
  async post (params: HttpPostParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.post(params.url, params.body)
    } catch (error) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }

  async get (params: HttpGetParams): Promise<void> {
    await axios.get(params.url)
  }
}
