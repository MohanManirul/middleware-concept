import { headers } from "next/headers";
import { NextResponse } from "next/server";

// export async function GET(){
//     let headerList = await headers();
//     let userId = headerList.get('user_id');
//     return NextResponse.json({
//         message : "I've Passed the middleware",
//         userId : userId
//     });

// }

export async function GET(){
    return NextResponse.json({
        message: 'I have passed the middleware and set the response which is visible to postman',          

    });
}