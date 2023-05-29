<template>
    <div ref="RegisterHome" id="RegisterForm" class="reservations section-temp">
        <div class="container">
            <div class="register-subscribe-wrap">
                <div class="col-md-13 register-subscribe-text">
                    <div class="register-subscribe-title">
                        <span>Điền thông tin để cập nhật nhanh nhất các sự kiện từ MISA và nhận tài liệu</span>
                    </div>
                </div>
                <div class="form-register col-md-10 col-md-offset-1">
                    <div class="register-subscribe-form">
                        <div id="formAI" style="color: red" class="aimarketing-form-embed-code">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

  
<script>
import '../../assets/style/index.css'

export default {
    data() {
        return {
            testSC: '123',
            customAttr: 'render-for'
        }
    },

    head() {
        return {
            // script: [
            //     {
            //         text: 'text/javascript',
            //         body: true,
            //         evn: 'production',
            //         id: 'ladizone-form-renderer-head',
            //     },
            //     {
            //         text: 'text/javascript',
            //         customAttr : "133b6d18-35ea-43c3-a4c7-9ffb776a631f",
            //         id: 'form-render'
            //     }
            // ],
            // __dangerouslyDisableSanitizers: ['script'],
        }
    },

    methods: {
        addScript() {
            // let tagScr = document.createElement("script")
            // tagScr.id = "ladizone-form-renderer"
            // let aiForm = document.getElementById("formAI")

            // aiForm.appendChild(tagScr);
            // let tagScr = document.getElementById("ladizone-form-renderer")
            // let formRender = document.getElementById("form-render")
            // let aiForm = document.getElementById("formAI")
            // aiForm.appendChild(tagScr);
            // tagScr.appendChild(formRender)
            // let scriptRender = document.createElement("script")
            // scriptRender.type = text/javascript
            
            // let tagScr = document.getElementById("ladizone-form-renderer")

            // tạo và set attr cho thẻ script 1
            let tagSrc = document.createElement("script")
            tagSrc.setAttribute("env", "production")
            tagSrc.id = "ladizone-form-renderer"
            tagSrc.src = "https://amismisa.misacdn.net/apps/aimarketing/form-editor/static/js/form-renderer.js"
            tagSrc.type = "text/javascript"


            // tạo và set attr cho thẻ script 1
            let renderForm = document.createElement("script")
            renderForm.setAttribute("render-for", "133b6d18-35ea-43c3-a4c7-9ffb776a631f")
            renderForm.type = "text/javascript"
            renderForm.innerHTML = `globalThis.lzfr.renderExternalForm({ formId: "133b6d18-35ea-43c3-a4c7-9ffb776a631f", tenantId: "56c33c47-78ec-4b3a-92ba-9fdb7830a6d4", domainUnomi: "https://ladizone.com" });`

            // add script tag vào thẻ div#formAI
            let aiForm = document.getElementById("formAI")
            aiForm.appendChild(tagSrc)
            aiForm.append(renderForm)

        },
    },

    beforeMount () {
        this.addScript()
        
    },

}


</script>
  
<style scoped>
.reservations {
    background: url(~/static/images/register/bg-register.png) no-repeat center;
    background-size: cover;
    color: #fff;
    height: 650px;
}

.register-subscribe-wrap {
    display: flex;
}

.register-subscribe-text {
    color: #FFF;
    padding-top: 40px;
}

.register-subscribe-title {
    font-family: GoogleSans Bold, Arial, sans-serif;
    font-size: 22px;
    line-height: 1.42857143;
    margin: 0;
}

.register-subscribe-form {
    background: #FFF;
    padding: 30px;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 auto;
}

.register-subscribe-form .aimarketing-form-embed-code .private-form .submit-wrapper .btn-form-submit {
    font-family: GoogleSans, Arial, sans-serif !important;
    background: #1C75F1 !important;
    font-size: 15px !important;
    outline: none !important;
}

.form-register {
    padding-top: 40px;
}
</style>