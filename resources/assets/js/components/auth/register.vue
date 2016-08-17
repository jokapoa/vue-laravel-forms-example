<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Register</div>
                    <div class="panel-body">
                        <div class="form-horizontal" role="form">

                            <div :class="registrationForm.fieldClass('name', 'form-group', 'has-error')">
                                <label for="name" class="col-md-4 control-label">Name</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" v-model="registrationForm.name" autofocus>

                                    <span class="help-block" v-if="registrationForm.errors.has('name')">
                                        <strong>{{ registrationForm.errors.get('name') }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div :class="registrationForm.fieldClass('email', 'form-group', 'has-error')">
                                <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email"
                                           type="email"
                                           class="form-control"
                                           name="email"
                                           v-model="registrationForm.email">

                                    <span class="help-block" v-if="registrationForm.errors.has('email')">
                                        <strong>{{ registrationForm.errors.get('email') }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div :class="registrationForm.fieldClass('password', 'form-group', 'has-error')">
                                <label for="password" class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password"
                                           type="password"
                                           class="form-control"
                                           v-model="registrationForm.password">

                                    <span class="help-block" v-if="registrationForm.errors.has('password')">
                                        <strong>{{ registrationForm.errors.get('password') }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div :class="registrationForm.fieldClass('password_confirmation', 'form-group', 'has-error')">
                                <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                                <div class="col-md-6">
                                    <input id="password-confirm"
                                           type="password"
                                           class="form-control"
                                           v-model="registrationForm.password_confirmation">

                                    <span class="help-block" v-if="registrationForm.errors.has('password_confirmation')">
                                        <strong>{{ registrationForm.errors.get('password_confirmation') }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button @click="register()" class="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'register',

        forms: {
            registrationForm: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        },

        methods: {
            register() {
                this.$forms.post('register', this.registrationForm)
                    .then((response) => window.location = response.redirectPath);
            }
        }
    }
</script>