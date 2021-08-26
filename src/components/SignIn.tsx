import { FC, useState } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { Typography, Col, Form, Checkbox } from "antd";
import styled from "styled-components";
import VienFooter from "./VienFooter";
import { ReactComponent as DrVienLogo } from "../assets/DrVienImage.svg";
import SignInArt from "../assets/DoctorSignIn.svg";
import VienInput, { VienPassword } from "./styles/VienInputs";
import VienPrimaryButton from "./styles/VienButtons";
import { SecondaryLink } from "./styles/VienLinks";
import { ConsoleSqlOutlined } from "@ant-design/icons";

import { loginUser } from "../context/SignInActions";
import { useAuthState, useAuthDispatch } from "../context/SignInContext";
import theme from "../theme/theme";

const Wrapper = styled.div`
  background-color: #fff;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr;
  }
`;

const SignInForm = styled.div`
  width: 450px;
  margin: 0 6rem;
`;

const FooterContent = styled(Typography.Paragraph)`
  margin: 0 6rem;
  color: #697077;
  font-size: ${({ theme }) => theme.fontSizes.smallest};
`;

const PageContentChild = styled.div`
  flex-basis: 100%;
`;

const SignInSVG = styled(Col)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-content: end;
  background-color: #f5fdff;
  z-index: 1;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;

const PageContent = styled.div`
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  z-index: 2;
  background-color: #fff;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    align-content: space-between;
    justify-content: center;

    ${SignInForm}, ${FooterContent} {
      margin: 0;
      width: 100%;
    }

    ${SignInSVG} {
      display: none;
    }
  }
`;

const InnerFormDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SignIn: FC = () => {
  const [user, setUser] = useState({ emailOrPhone: "", password: "" });
  const history = useHistory();
  const { loading, errorMessage } = useAuthState();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.currentTarget.name]: e.currentTarget.value,
      };
    });
    console.log(user);
  };

  const dispatch = useAuthDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const { emailOrPhone, password } = user;
    const payload = {
      email: emailOrPhone,
      password: password,
    };

    try {
      const response = await loginUser(dispatch, payload);
      if (!response) return;
      console.log("Successfully logged in");
      history.push("/");
    } catch (e) {
      console.log(e);
      console.log(errorMessage);
    }
  };
  return (
    <Wrapper>
      <PageContent>
        <PageContentChild>
          <DrVienLogo />
        </PageContentChild>
        <PageContentChild>
          <SignInForm>
            {errorMessage && (
              <Typography.Paragraph style={{ color: theme.colors.error }}>
                {errorMessage}
              </Typography.Paragraph>
            )}
            <Typography.Title
              style={{ fontWeight: 700, color: "#123148" }}
              level={2}
            >
             Let’s get you set up
            </Typography.Title>
            <Typography.Paragraph style={{ color: "gray" }}>
              It just takes a few minutes to sign up and expand your practice. Start connecting with new patients today!
            </Typography.Paragraph>
            <Form onFinish={onSubmit}>
              <Form.Item
                name="yourName"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <VienInput
                  name="Your name."
                  onChange={handleInputChange}
                  value={user.emailOrPhone}
                  placeholder="Your name."
                  disabled={loading}
                />
              </Form.Item>
              <Form.Item
                name="EmailorPhoneNumber"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <VienInput
                  name="Email or Phone number."
                  onChange={handleInputChange}
                  value={user.password}
                  placeholder="Your email or password"
                  disabled={loading}
                />
              </Form.Item>
              <InnerFormDiv>
                
               
              </InnerFormDiv>
              <Form.Item>
                <VienPrimaryButton disabled={loading}>
                  Next
                </VienPrimaryButton>
              </Form.Item>
              <Typography.Paragraph
                style={{ color: "#A2A9B0", fontWeight: 400 }}
              >
                Already a member?{" "}
                <a href="/sign-up" style={{ color: "#123148" }}>
                  Sign in
                </a>
              </Typography.Paragraph>
            </Form>
          </SignInForm>
        </PageContentChild>
        <PageContentChild>
          <FooterContent>
            <VienFooter />
          </FooterContent>
        </PageContentChild>
      </PageContent>
      <SignInSVG>
        <img alt="User Selection Art" src={SignInArt} />
      </SignInSVG>
    </Wrapper>
  );
};

export default SignIn;
