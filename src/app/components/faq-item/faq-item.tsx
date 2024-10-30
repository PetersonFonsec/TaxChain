'use client';

import { ReactElement, useState } from "react";
import styles from "./faq-item.module.css";

interface FaqParam {
    children: ReactElement 
    question: string
    index: number
}

export default function FaqItem({children, question, index}: FaqParam) {
    const [faqClass, setFaq] = useState(styles.faqItem);
    const [toggle, setToggle] = useState(true);

    const handleFaqClass = () => {
        setFaq((current: string) => toggle ? current += ` ${styles.showAnswer}` : styles.faqItem);
        setToggle(!toggle);
    }

    return <>
            <li 
                className={faqClass}
                onClick={handleFaqClass}
            >
                <span className={styles.faqItemContainer}>
                    <span className={styles.square}>
                        {index}
                    </span>

                    <span className={styles.question}>
                    {question}
                    </span>

                    <button name="question-2" className={styles.button} type="button">
                    show answer
                    </button>
                </span>
              <span className={styles.answer}>
                {children}
              </span>
            </li>
        </>
}