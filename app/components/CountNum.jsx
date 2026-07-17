"use client";
import CountUp from 'react-countup';

const CountNum = ({start, end, delay}) => {

  return (
    <>
       <CountUp start={start} end={end} delay={delay}>
        {({ countUpRef }) => (
            <span ref={countUpRef} />
           )}
       </CountUp>
    </>
  )
}

export default CountNum