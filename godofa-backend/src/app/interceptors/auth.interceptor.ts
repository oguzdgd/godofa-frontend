import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem("token");
  let newRequest :HttpRequest<any>;

  newRequest=req.clone({
    headers:req.headers.set("Authorization","Bearer " + token)
  })
  return next(req);
};
