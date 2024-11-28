import { Button, Card, CardBody, CardHeader, Form, FormGroup, FormText, Input, Label } from "reactstrap";

export default function Register() {
    return (
    <Card>
        <CardHeader>
    Header
  </CardHeader>
    <CardBody>
        <Form>
        <FormGroup>
            <Label for="ad">
            Ad:
            </Label>
            <Input
            id="ad"
            name="ad"
            placeholder="Adınızı giriniz"
            type="text"
            />
        </FormGroup>
        <FormGroup>
            <Label for="soyad">
            Soyad:
            </Label>
            <Input
            id="soyad"
            name="soyad"
            placeholder="Soyadınızı giriniz"
            type="text"
            />
        </FormGroup>
        <FormGroup>
            <Label for="email">
            Email:
            </Label>
            <Input
            id="email"
            name="email"
            placeholder="Kurumsal emailinizi giriniz"
            type="email"
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">
            Password
            </Label>
            <Input
            id="password"
            name="password"
            placeholder="Güçlü bir password seçiniz"
            type="password"
            />
        </FormGroup>
        
        <Button>
            Kayıt Ol
        </Button>
        </Form>
        </CardBody>
    </Card>
    );
  }
  