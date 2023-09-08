import React, { useEffect, useRef, useState } from "react";
import {
    OTPInputContainer,
    TextInputHidden,
    SplitOTPBoxesContainer,
    SplitBoxes,
    SplitBoxText,
    SplitBoxesFocused
} from "../screens/Login/styles";

const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef();
    const [isInputBoxFocused, setIsInputBoxFocused] = useState(true);

    const boxDigit = (_, index) => {
        const emptyInput = "";
        const digit = code[index] || emptyInput;
        // console.log(digit);

        const isCurrentValue = index === code.length;
        const isLastValue = index === maximumLength - 1;
        const isCodeComplete = code.length === maximumLength;

        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

        const StyledSplitBoxes =
            isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
        // console.log(StyledSplitBoxes);
        return (
            <StyledSplitBoxes key={index}>
                <SplitBoxText>{digit}</SplitBoxText>
            </StyledSplitBoxes>
        );
    }

    useEffect(() => {
        // update pin ready status
        setIsPinReady(code.length === maximumLength);
        // clean up function
        return () => {
            setIsPinReady(false);
        };
    }, [code]);



    const handleOnPress = () => {
        setIsInputBoxFocused(true)
        inputRef.current.focus();
    };

    const handleOnBlur = () => {
        setIsInputBoxFocused(false);
    };

    return (
        <OTPInputContainer>
            <SplitOTPBoxesContainer>{boxArray.map(boxDigit)}</SplitOTPBoxesContainer>
            <TextInputHidden
                value={code}
                onChangeText={(text) => {
                    setCode(text);
                    if (text.length === maximumLength) {
                        setIsPinReady(true); // Agar kiritilgan kod maksimal uzunlikka teng bo'lsa isPinReady ni true qiling
                    } else {
                        setIsPinReady(false); // Aks holda false qiling
                    }
                }}
                maxLength={maximumLength}
                ref={inputRef}
                onBlur={() => handleOnBlur()}
                keyboardType="numeric" // Raqamlarni kiritsa boladi
            />
        </OTPInputContainer>
    );
};

export default OTPInput;