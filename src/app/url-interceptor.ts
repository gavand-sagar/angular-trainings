import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        const httpRequest = new HttpRequest(<any>req.method, 'abcd.api.com/search');
        req = Object.assign(req, httpRequest);
        if (req.url === 'https://abcd.azure.net/api/v1/getPendinList') {
            // return Observable.empty();
            console.log('hello');
        }
        const dupReq = req.clone({
            headers: req.headers.set('Consumer-Secret', 'some sample key'),
        });
        return next.handle(dupReq);
    }
}