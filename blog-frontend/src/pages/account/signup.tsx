import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Spin,
  Typography,
} from "antd";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/signIn.module.css";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { setToken } from "../../helpers";
import Header from "../../components/header";

const SignUp = () => {
  const isDesktopView = true;
  const router = useRouter();
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);
        // set the user
        setUser();
        message.success(`Bienvenue chez Mentor Goal, ${data.user.username}!`);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      setError("Nom d'utilisateur ou mot de passe incorrect.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className={styles.main}>
        <Row align="middle">
          <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
            <Card title="Créer un compte">
              {error ? (
                <Alert
                  className="alert_error"
                  message={error}
                  type="error"
                  closable
                  afterClose={() => setError("")}
                />
              ) : null}
              <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Nom d'utilisateur"
                  name="username"
                  rules={[
                    {
                      required: true,
                      type: "string",
                    },
                  ]}
                >
                  <Input placeholder="ex: SébastienouCestBastien" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder="ex: seb@hotmail.fr" />
                </Form.Item>

                <Form.Item
                  label="Mot de passe"
                  name="password"
                  rules={[{ required: true }]}
                >
                  <Input.Password placeholder="8 caractères minimum" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.login_submit_btn}
                  >
                    Submit {isLoading && <Spin size="small" />}
                  </Button>
                </Form.Item>
              </Form>
              <Typography.Paragraph className={styles.linkChangePage}>
                Tu as déjà un compte ?
                <Link href="/account/signin">Connecte toi</Link>
              </Typography.Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default SignUp;