import { useContext, useEffect } from "react"
import { AsidePeople, ButtonAdd, ButtonDiv, ButtonLogout, Container, ContainerHeader, ContainerMain, ContainerPeople, HeaderPeople, ItemsList, ItemsListFirstChild, List, ListAside, ListHeader, LogoAndTitle, UserInfos } from "./People.Styled"
import { useNavigate } from "react-router-dom"
import FlatList from "../../components/flatList/FlatList"
import { PeopleContext } from "../../context/PeopleContext"
import { AuthContext } from "../../context/AuthContext"
import { Logo } from "../../components/logo/Logo";
import { Search } from "../../components/search/Search"
import { Notification } from "../../components/notification/Notification"
import { Sort } from "../../components/sort/Sort"
import { Filter } from "../../components/filter/FIlter"

function People() {
  const navigate = useNavigate()
  const {getPessoas, pessoas} = useContext(PeopleContext)
  const {auth, handleLogout} = useContext(AuthContext);

  async function setup () {
    getPessoas()
  }
  useEffect(() => {
    setup()
  }, [])

  function handleAdd() {
    navigate('/criar-pessoa')
  }

  return (
    <Container>
      <AsidePeople>
        <LogoAndTitle>
          <Logo />
          <h2>Dashboard</h2>
        </LogoAndTitle>
        <List>
          <ListAside>
            <ItemsListFirstChild>People</ItemsListFirstChild>
            <ItemsList>Overview</ItemsList>
            <ItemsList>Ideas</ItemsList>
          </ListAside >
        </List>
        <ButtonDiv>
          {auth && <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>}
        </ButtonDiv>
      </AsidePeople>
      <ContainerMain>
        <ContainerHeader>
          <div>
            <h2>People</h2>
          </div>
          <UserInfos>
            <div>
              <Search />
              <Notification />
            </div>
            <div>
              <p>Admin</p>
            </div>
          </UserInfos>
        </ContainerHeader>
        <ContainerPeople> 
          <HeaderPeople>
            <div>
              <ButtonAdd onClick={handleAdd}>Add Person</ButtonAdd>
            </div>
            <div>
              <div>
                <Sort />
                <p>Sort</p>
              </div>
              <div>
                <Filter />
                <p>Filter</p>
              </div>
            </div>
          </HeaderPeople>
          <ListHeader>
            <p>Name</p>
            <p>Birthday</p>
            <p>CPF</p>
            <p>E-mail</p>
            <p>Action</p>
          </ListHeader>
          <FlatList list={pessoas} />
        </ContainerPeople>
      </ContainerMain>
    </Container>
  )
}

export default People