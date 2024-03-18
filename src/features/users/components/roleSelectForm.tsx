import React, { useEffect, useRef } from "react"; // useRef'i import edin
import { Button, Checkbox, Divider, Form, Input, Tabs } from "antd";
import type { FormInstance } from "antd";
import { UserAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchRoles } from "../../roles/roleSlice";
import User from "../../../network/models/User";

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RoleSelectFormProps {
  onFinish: (values: any) => void;
  user?: User;
}

const RoleSelectForm: React.FC<RoleSelectFormProps> = ({ onFinish, user }) => {
  const dispatch = UserAppDispatch();
  const roles = useAppSelector((state: any) => state.roles.list);

  const formRef = useRef<FormInstance>(null);
  const TabPane = Tabs.TabPane;

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  useEffect(() => {
    const defaultCheckedValues = roles // user.Roles
      .filter((f: any) => f.name !== "user") // kullanıcı role sahip ise true : false
      .map((role: any) => role._id);
    if (formRef.current) {
      formRef.current.setFieldsValue({
        roleNames: defaultCheckedValues,
        _id: user?._id,
      });
    }
  }, [roles]);

  const options: Option[] = roles.map((role: any) => ({
    label: role.name,
    value: role._id,
  }));

  return (
    <>
      {user && (
        <div>
          <Form
            ref={formRef}
            onFinish={onFinish}
            initialValues={{
              roleNames: [],
            }}
          >
            <Tabs defaultActiveKey="1">
              <TabPane tab="Roles" key="1">
                <Form.Item name="_id">
                  <Input type="hidden" />
                </Form.Item>
                <Form.Item name="roleIds">
                  <Checkbox.Group options={options} style={{ width: "100%" }} />
                </Form.Item>
                <Divider />
                <Form.Item>
                  <Button
                    style={{ float: "right" }}
                    type="primary"
                    htmlType="submit"
                  >
                    Kaydet
                  </Button>
                </Form.Item>
              </TabPane>
            </Tabs>
          </Form>
        </div>
      )}
    </>
  );
};

export default RoleSelectForm;