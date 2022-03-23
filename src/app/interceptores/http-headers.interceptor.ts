import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable,throwError as observableThrowError} from "rxjs";
import{catchError} from "rxjs/operators";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor(){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       req = req.clone({
           setHeaders:{
               'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': '677fb7c3d8msh6bddc3296da4143p1f7cf8jsn0acf245dd10c',
           },

           setParams: {
               key: 'c45b1cca07c241feb9f03603a93d3ca0'
           }

       });
       return next.handle(req);
    }

}