# Bard in Gradio UI

This is an bare bone project of how you can find poducts similiar to some other product using Google Bard. 
Base idea of this is to show how you can connect Bard to Gradio.

## Getting Started
You need a api key for Bard.

Go to https://bard.google.com/chat and check your cookies and copy the value in __Secure-1PSID.

![image](https://github.com/Rouhis/AIProjectSAM/assets/103174848/66e509db-01b0-4fdb-a68b-2de644dbbd94)


You need to have photo of a piece of clothing that you can use to test the program.

## Installing
Installing dependencies.
### Gradio
```bash
pip install gradio
```
### Bard

```bash
pip install bardapi
```
```bash
pip install git+https://github.com/dsdanielpark/Bard-API.git
```
```bash
pip install bardapi==0.1.38
```
## Run the app
Add your API key to line 23.

![image](https://github.com/Rouhis/AIProjectSAM/assets/103174848/9b01bb86-0d73-4993-93d2-1856bd0e058e)

You can run the app using command
```bash
gradio bardGradio.py
```
or in VSCode

App should run on http://127.0.0.1:7860

## How to use

![image](https://github.com/Rouhis/AIProjectSAM/assets/103174848/64b8b65b-7244-490f-86bc-082c94af05c3)

Add your image to the first slot and then press find similiar products. Then Bard will find the products for you and give you a text prompt about them.

Similiar product images doesn't work yet.


