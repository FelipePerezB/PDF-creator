import React, { ReactElement, ReactNode } from 'react'
import styles from "../styles/reportTemplate.module.css";
import DocInfo from '@/components/DocInfo';

export default function Page({isFirstPage, children}: {
  isFirstPage?: boolean;
  children: ReactElement
}) {
  return (
    <div className={styles.page}>
      {isFirstPage && <DocInfo/>}
      {children}
    </div>
  )
}
