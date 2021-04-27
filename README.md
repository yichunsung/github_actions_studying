# 搭配Github actions建立一套 CI/CD系統

1. 建立測試

  * lint test

  * unit test

2. 建立部署流程

  * 先熟知你要部署的流程

  * 來點Docker吧

3. 搭建部署環境

  * GCE VM使用

    * 創建一個VM 的 key

    [文件](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#createsshkeys)

```bash

$ ssh-keygen -t rsa -f ~/.ssh/[KEY_FILENAME] -C [USERNAME]

```

    * 測試進入

```bash

$ ssh -i ~/.ssh/KEY_FILENAME USERNAME@IP

```

  * GCR 使用

4. 設定你的第一個github actions workflows

5. 使用你的github actions
  
  * 設定Secrets 變數

    * gcloud login

```bash

$ gcloud auth print-access-token

```

  * 設定你的yml

6. 測試

7. 部署

8. 自動化

