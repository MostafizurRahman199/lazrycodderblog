'use client'
import React from 'react'
import {  useSession } from 'next-auth/react'

export default function login() {

    const {data : session} = useSession();

    if( session?.user?.name){
      return true;
    }else{
      return false;
    }

}