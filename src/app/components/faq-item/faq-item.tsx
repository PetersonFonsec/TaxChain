'use client';

import styles from "./faq-item.module.css";

interface FaqParam {
    children: string 
    question: string
    index: number
}

export default function FaqItem({children, question, index}: FaqParam) {
    const showAnswer = () => console.log("teste");

    return <>
            <li onClick={showAnswer} className={styles.faqItem}>
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