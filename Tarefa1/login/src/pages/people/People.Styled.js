import styled from "styled-components";


export const Container = styled.div`
  display: flex;
`

export const AsidePeople = styled.div`
  width: 17vw;
  background-color:  #363740;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 37px;
  margin-bottom: 77px;

  > img {
    width: 32px;
    height: 32px;
  }

  > h2 {
    font-weight: 700;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #A4A6B3;
    opacity: 0.7;
  }
`

export const ListAside = styled.ul`
  padding-left: 0;
`

export const ItemsListFirstChild = styled.li`
  list-style-type: none;
  height: 56px;
  background-color: rgba(159, 162, 180 ,0.08);
  color: #DDE2FF;
  display: flex;
  align-items: center;
  font-size: 16px;
  border-left: 3px solid #DDE2FF;
  padding-left: 30px;
`

export const ItemsList = styled.li`
  list-style-type: none;
  height: 56px;
  color: #A4A6B3;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-left: 33px;

  &:hover {
  background-color: rgba(159, 162, 180 ,0.08);
  color: #DDE2FF;
  border-left: 3px solid #DDE2FF;
  padding-left: 30px;
  }
`

export const List = styled.nav`
  border-bottom: 1px solid rgba(159, 162, 180 ,0.08);
  margin-bottom: 34px;
`

export const ButtonDiv = styled.div`
  width: 17vw;
  display: flex;
  justify-content: center;
`

export const ButtonLogout = styled.button`
  height: 48px;
  width: 150px;
  background: #3751FF;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #FFFFFF;
  justify-content: center;

  &:hover {
    background: #FFFFFF;
    color: #3751FF;
    border: 1px solid #3751FF;
    cursor: pointer;
  }
`

export const ContainerMain = styled.div`
  width: 83vw;
  background-color: #F7F8FC;
  padding: 36px 30px;
`

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const UserInfos = styled.div`
  display: flex;
  align-items: center;

  >div:first-child {
    border-right: 1px solid #DFE0EB;
    margin-right: 32px;
    padding-right: 32px;
    display: flex;
    gap: 25px ;
  }
`

export const ContainerPeople = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #DFE0EB;
  border-radius: 8px;
  background-color: #FFFFFF;
`

export const HeaderPeople = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px;

  >div:last-child {
    display: flex;
    gap: 34px;

    >div {
      display: flex;
      gap: 9px;
    }
  }
`

export const ButtonAdd = styled.div`
  height: 48px;
  width: 150px;
  background: #3751FF;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #FFFFFF;
    color: #3751FF;
    border: 1px solid #3751FF;
    cursor: pointer;
  }
`

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr 1.5fr;
  justify-content: center;
  padding-left: 32px;
  padding-bottom: 12px;
  border-bottom: 1.5px solid #DFE0EB;

  > p {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    color: #9FA2B4;
  }
`

export const FormContainer = styled.div`
  background-color: #363740;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerDetailPerson = styled.div`
  background-color: #363740;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const DetailPerson = styled.div`
  background-color: #F7F8FC;
  width: 1122px;
  min-height: 582px;
  border: 1px solid #DFE0EB;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-weight: 700;
    font-size: 16px;
    line-height: 5px;
    letter-spacing: 0.3px;
    color: black;
  }

  > p:first-child {
    margin-top: 30px;
  }
`

export const UserItens = styled.div`
  display: flex;
  gap: 20px;
`

export const ButtonsDetailsPerson = styled.div`
  display: flex;
  gap: 700px;

  > button {
    height: 48px;
    width: 150px;
    background: #3751FF;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    &:hover {
      background: #FFFFFF;
      color: #3751FF;
      border: 1px solid #3751FF;
      cursor: pointer;
    }
  }
`

export const InfosAddress = styled.div`
  width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
  border-bottom: 1px solid #DFE0EB;
`

export const InfosAddressApi = styled.div`
  width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
  border-bottom: 1px solid #DFE0EB;
  align-items: center;
`