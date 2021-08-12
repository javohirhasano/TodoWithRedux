import styled from 'styled-components'
import { ListGroupItem } from 'reactstrap'

const ListGroupItemWrapper = styled(ListGroupItem)`
.dropdown-toggle::after{
    display: none;
}
input{
    border:none
}
`

export default ListGroupItemWrapper