import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 40px;

  position: fixed;

  background-color: #fafafa;

  -webkit-user-select: none;
  -webkit-app-region: drag;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const Actions = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Icon = styled.button`
  -webkit-app-region: no-drag;

  height: 100%;
  color: black;
  font-size: 18px;
  transition: 0.2s linear;
  background: inherit;
  border: none;
  padding: 8px 12px;
  padding-bottom: 0;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    background-color: #ededed;
  }
`
