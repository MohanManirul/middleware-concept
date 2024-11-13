
// export function middleware(){
//     console.log("I'm from middleware");
// }

import { NextResponse } from "next/server";


// export const config={
//     matcher:['/api/:path*']
// }


// export function middleware(req, res){

//     if(req.nextUrl.pathname.startsWith("/api/product")){
//         console.log("This is API Route inside product directory");
//     }else if(req.nextUrl.pathname.startsWith("/cartList")){
//         console.log("This is API Route inside product directory");
//     }

// }

// export function middleware(req, res){
//    if(req.nextUrl.pathname.startsWith("/api/product")){
//     const reqHeader = new Headers(req.headers)
//     const token = reqHeader.get('token');
//     //use validation here
//     if(token ==='ABC-123qw'){
//         return NextResponse.next();
//     }else{
//         return NextResponse.json({
//             message : 'Unauthorised',
//             status  : 401
//         });
//     }
//    }
// }


// export function middleware(req, res){
//     if(req.nextUrl.pathname.startsWith("/api/product")){
//         const reqHeader = new Headers(req.headers);
//         reqHeader.set("user_id", "1");
//         return NextResponse.next({
//             request:{headers: reqHeader}
//         });

//     }
// }

export function middleware(req , res){
    if(req.nextUrl.pathname.startsWith("/api/product")){
        const response = NextResponse.next();
        response.headers.set("API_KEY1","1ABC-XYZ");
        response.headers.set("API_KEY2","2ABC-XYZ");
        response.headers.set("API_KEY3","3ABC-XYZ");
        return response;
    }

}

