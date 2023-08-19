-- 코드를 입력하세요
SELECT
    MP.MEMBER_NAME,
    RR.REVIEW_TEXT,
    DATE_FORMAT(RR.REVIEW_DATE, "%Y-%m-%d") AS FORMATTED_REVIEW_DATE
FROM
    MEMBER_PROFILE MP
INNER JOIN (
    SELECT
        T1.MEMBER_ID,
        T1.REVIEW_TEXT,
        T1.REVIEW_DATE
    FROM
        REST_REVIEW T1
    INNER JOIN (
        SELECT
            U1.MEMBER_ID,
            COUNT(*) AS REVIEW_COUNT
        FROM
            REST_REVIEW U1
        GROUP BY
            U1.MEMBER_ID
        HAVING
            REVIEW_COUNT = (
                SELECT MAX(REVIEW_COUNT)
                FROM (
                    SELECT
                        COUNT(*) AS REVIEW_COUNT
                    FROM
                        REST_REVIEW
                    GROUP BY
                        MEMBER_ID
                ) U2
            )
    ) T2 ON T1.MEMBER_ID = T2.MEMBER_ID
) RR ON MP.MEMBER_ID = RR.MEMBER_ID
ORDER BY
    RR.REVIEW_DATE, RR.REVIEW_TEXT;
