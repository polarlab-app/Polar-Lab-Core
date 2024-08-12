import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import userAccount from './src/schemas/userAccount';
import mongoose from 'mongoose';

export async function middleware(request) {
    const accountToken = cookies().get('accountToken');

    if (!accountToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        await mongoose.connect(process.env.MONGO_URI || '', {
            authSource: 'admin',
        });
        const user = await userAccount.findOne({ accountToken: accountToken.value });
        if (!user || user.role !== 'admin') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
};
