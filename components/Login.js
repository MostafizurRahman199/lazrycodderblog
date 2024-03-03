"use client"
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Modal from '../modal/Modal'
import styles from './login.module.css'

export default function login(props) {
    const {data : session} = useSession();
    let flag;
    let design ;
    if( session?.user?.name){
        flag = true
        design='have_design'
    }else{
        flag = false;
        design='no_design'
    }

  return (
  <>
   {
    flag &&  <span className={styles.have_design}><Modal id={props.id}  titlee={props.blog.title} contentt={props.blog.content} authorr={props.blog.author} isUpdate={props.isUpdate}  operation={props.operation} ></Modal></span>
    
    }
  </>
  )
}
