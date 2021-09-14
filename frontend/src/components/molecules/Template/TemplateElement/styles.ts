import styled from 'styled-components';

export const StyleElementIcon = styled.svg(({}) => ({
  stroke: '#003768',
  margin: 10
}));

export const TemplateElement = styled.div(({}) => ({
  margin: '8px 1px 8px 1px',
  color: '#003768',
  borderRadius: 10,
  cursor: 'pointer',
  ':hover': {
    color: '#2196F3',
    backgroundColor: '#BBDEFB57',
    svg: {
      stroke: '#2196F3'
    }
  }
}));

export const TemplateElementTitle = styled.div(({}) => ({}));
