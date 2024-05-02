import { useState } from "react";
import ValidationResult from "../types/ValidationResult";
import Validation from "../utils/Validation";

interface ExpiryDate {
  month: string;
  year: string;
}

interface ExpiryDateValidationResult {
  expiryDate: ExpiryDate;
  validationResult: ValidationResult;
  handleUpdateExpiryDate: (value: ExpiryDate) => void;
}

export default function useCardExpiryDate(
  initialValue: ExpiryDate
): ExpiryDateValidationResult {
  const [expiryDate, setExpiryDate] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const handleUpdateExpiryDate = (value: ExpiryDate) => {
    setExpiryDate(value);

    if (!validateExpireMonth(value.month)) {
      setValidationResult({
        isValid: false,
        errorMessage:
          "유효 기간의 월은 01 ~ 12 사이의 2자리 숫자로 입력하셔야 합니다.",
      });
      return;
    }

    if (!validateExpireYear(value.year)) {
      setValidationResult({
        isValid: false,
        errorMessage: "유효 기간의 연도는 2자리 숫자로 입력하셔야 합니다.",
      });
      return;
    }

    if (!validateExpiryDate(value)) {
      setValidationResult({
        isValid: false,
        errorMessage: "유효 기간이 만료되었습니다. 확인 후 다시 입력해 주세요.",
      });
      return;
    }

    setValidationResult({ isValid: true });
  };

  return {
    expiryDate,
    validationResult,
    handleUpdateExpiryDate,
  };
}

function validateExpiryDate(value: ExpiryDate) {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear() - 2000;

  const inputMonth = parseInt(value.month, 10);
  const inputYear = parseInt(value.year, 10);

  return (
    inputYear > currentYear ||
    (inputYear === currentYear && inputMonth >= currentMonth)
  );
}

function validateExpireMonth(month: string) {
  return (
    Validation.isNumeric(month) &&
    Validation.hasLength(month, 2) &&
    Validation.isNumberInRange({ min: 1, max: 12, value: Number(month) })
  );
}

function validateExpireYear(year: string) {
  return Validation.isNumeric(year) && Validation.hasLength(year, 2);
}
