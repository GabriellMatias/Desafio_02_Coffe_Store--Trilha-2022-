import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      width: 120px;
      height: 120px;
      margin-top: -21px;
    }
    .textContainer {
      display: flex;
      gap: 0.8rem;

      .type {
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;
        text-transform: uppercase;

        border-radius: 100px;
        width: fit-content;
        height: 21px;
        margin-top: 1.3rem;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.4rem 0.8rem;
        gap: 4rem;

        color: ${(props) => props.theme['yellow-dark']};
        background-color: ${(props) => props.theme['yellow-light']};
      }
      .class {
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;
        text-transform: uppercase;

        border-radius: 100px;
        width: fit-content;
        height: 21px;
        margin-top: 1.3rem;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.4rem 0.8rem;
        gap: 4rem;

        color: ${(props) => props.theme['yellow-dark']};
        background-color: ${(props) => props.theme['yellow-light']};
      }
    }
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      margin: 1.6rem 0 0.8rem 0;
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
    h2 {
      margin-bottom: 3.3rem;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme['base-label']};
      text-align: center;
      padding: 0 2rem;
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem 2rem 2.4rem;

    > div {
      gap: 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    > span {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;

      text-align: right;

      color: ${(props) => props.theme['base-text']};
    }
  }
  .inputStyle {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: ${(props) => props.theme['base-hover']};
    border-radius: 8px;
  }

  .shoppingCartButton {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    gap: 0.8rem;
    border: none;
    cursor: pointer;

    width: 38px;
    height: 38px;

    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.White};
    border-radius: 6px;
    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
const baseButton = styled.button`
  min-width: 20px;
  min-height: 32px;

  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
`

export const AddButton = styled(baseButton)`
  &::before {
    content: '';
    border-radius: 8px;
    display: block;
    background: ${(props) => props.theme.purple};
    width: 1.3px;
    height: 10.9px;
    transform: translate(6.5px);
  }
  &::after {
    content: '';
    border-radius: 8px;
    display: block;
    background: ${(props) => props.theme.purple};
    width: 10.94px;
    height: 1.5px;
  }
  &:hover {
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
  }
`
export const MinusButton = styled(baseButton)`
  &::after {
    content: '';
    border-radius: 8px;
    display: block;
    background: ${(props) => props.theme.purple};
    width: 10.94px;
    height: 1.31px;
  }
  &:hover {
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
  }
`
