import styled from "styled-components";
import Text from "../Text";

const Logo = () => {
  return (
    <Container>
      <Text bold size={64}>
        ONLY.
      </Text>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 40px;
`;
export default Logo;
