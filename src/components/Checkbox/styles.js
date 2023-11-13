import React, { useState } from 'react';
import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: right;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  

  
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;

  width: 16px;
  height: 16px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 4px;
  cursor: pointer;
`;