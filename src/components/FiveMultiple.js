import React, { useEffect } from "react";

const FiveMultiple = () => {
  // 현재 컴포넌트가 mount 될 때
  useEffect(() => {
    console.log("FiveMultiple 컴포넌트가 마운트 됨");
  }, []);

  // 현재 컴포넌트가 unmount 될 때
  useEffect(() => {
    return () => {
      window.alert("FiveMultiple 컴포넌트가 언마운트 되었습니다");
    };
  }, []);
  return <h1>현재 count는 5의 배수입니다</h1>;
};

export default FiveMultiple;
