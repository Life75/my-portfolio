// src/repositories/BaseRepository.ts
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  AxiosError,
} from 'axios';

export abstract class BaseRepository {
  protected readonly httpClient: AxiosInstance;

  constructor(baseURL: string, config: AxiosRequestConfig = {}) {
    this.httpClient = axios.create({
      baseURL,
      ...config,
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor() {
    this.httpClient.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  }

  private handleResponse = <T>(response: AxiosResponse<T>): T => {
    return response.data;
  };

  protected handleError = (error: AxiosError): Promise<never> => {
    // Here you can add global error handling logic
    // For example, you can check error.response.status and show appropriate messages
    return Promise.reject(error);
  };

  protected get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.httpClient.get(url, config);
  }

  protected post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.httpClient.post(url, data, config);
  }

  protected put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.httpClient.put(url, data, config);
  }

  protected patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.httpClient.patch(url, data, config);
  }

  protected delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.httpClient.delete(url, config);
  }
}