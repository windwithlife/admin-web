import React, { useRef, useState } from 'react';
import { Card, Result, Button, Descriptions, Divider, Alert, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ProFormDigit, ProFormSelect, ProFormText, ProFormTextArea, StepsForm } from '@ant-design/pro-form';
import ReactWEditor from 'wangeditor-for-react';
import styles from './style.less';

const StepDescriptions = ({ stepData, bordered }) => {
  const { payAccount, receiverAccount, receiverName, amount } = stepData;
  return (
    <Descriptions column={1} bordered={bordered}>
      <Descriptions.Item label="付款账户"> {payAccount}</Descriptions.Item>
      <Descriptions.Item label="收款账户"> {receiverAccount}</Descriptions.Item>
      <Descriptions.Item label="收款人姓名"> {receiverName}</Descriptions.Item>
      <Descriptions.Item label="转账金额">
        <Statistic
          value={amount}
          suffix={
            <span
              style={{
                fontSize: 14,
              }}
            >
              元
            </span>
          }
          precision={2}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};

const StepResult = (props) => {
  return (
    <Result
      status="success"
      title="操作成功"
      subTitle="预面3秒内界面可见"
      extra={
        <>
          <Button type="primary" onClick={props.onFinish}>
            再写一篇
          </Button>
          <Button>保存</Button>
        </>
      }
      className={styles.result}
    >
      {props.children}
    </Result>
  );
};

const StepForm = (props) => {
  console.log("props ===>", props);
  const [stepData, setStepData] = useState({
    payAccount: 'ant-design@alipay.com',
    receiverAccount: 'test@example.com',
    receiverName: 'Alex',
    amount: '500',
    receiverMode: 'alipay',
  });
  const [current, setCurrent] = useState(0);
  const formRef = useRef();
  return (
    <PageContainer content="分步处理文本。">
      <Card bordered={false}>
        <StepsForm
          current={current}
          onCurrentChange={setCurrent}
          submitter={{
            render: (props, dom) => {
              if (props.step === 2) {
                return null;
              }

              return dom;
            },
          }}
        >

          <StepsForm.StepForm title="填写文本内容">
            <div className={styles.result}>

              <ReactWEditor
                defaultValue={'<h1>标题</h1>'}
                linkImgCallback={(src, alt, href) => {
                  // 插入网络图片的回调事件
                  console.log('图片 src ', src)
                  console.log('图片文字说明', alt)
                  console.log('跳转链接', href)
                }}
                onlineVideoCallback={(video) => {
                  // 插入网络视频的回调事件
                  console.log('插入视频内容', video)
                }}
                onChange={(html) => {
                  console.log('onChange html:', html)
                }}
                onBlur={(html) => {
                  console.log('onBlur html:', html)
                }}
                onFocus={(html) => {
                  console.log('onFocus html:', html)
                }}
              />

              <Divider
                style={{
                  margin: '24px 0',
                }}
              />
              <ProFormText
                label="文本标题"
                width="md"
                name="password"
                required={false}
                rules={[
                  {
                    required: true,
                    message: '需要一个标题',
                  },
                ]}
              />
            </div>
          </StepsForm.StepForm>
          <StepsForm.StepForm
            formRef={formRef}
            title="填写归类信息"
            initialValues={stepData}
            onFinish={async (values) => {
              setStepData(values);
              return true;
            }}
          >
            <ProFormSelect
              label="信息所属类目"
              width="md"
              name="payAccount"
              rules={[
                {
                  required: true,
                  message: '请选择类目',
                },
              ]}
              valueEnum={{
                'news': '新闻',
                'advertise': '广告',
              }}
            />

           
            <ProFormTextArea
              label="简单描述"
              width="md"
              name="receiverName"
              rules={[
                {
                  required: true,
                  message: '请输入描述内容',
                },
              ]}
              placeholder="请输入描述内容"
            />
           
          </StepsForm.StepForm>

          <StepsForm.StepForm title="完成">
            <StepResult
              onFinish={async () => {
                setCurrent(0);
                formRef.current?.resetFields();
              }}
            >
             
            </StepResult>
          </StepsForm.StepForm>
        </StepsForm>
        <Divider
          style={{
            margin: '40px 0 24px',
          }}
        />
        <div className={styles.desc}>
          <h3>说明</h3>
          <h4>录入富文本信息</h4>
          <p>
            如果需要，要把文本内容持到特定频道中。
          </p>


        </div>
      </Card>
    </PageContainer>
  );
};

export default StepForm;
