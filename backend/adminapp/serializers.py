from rest_framework import serializers
from core.models import User, Plan, Transaction, OTP, Withdrawal, Deposit

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwarg = {
            "last_login":{
                "read_only":True
            }
        }

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

class OTPSerializer(serializers.ModelSerializer):
    class Meta:
        model = OTP
        fields = '__all__'

class WithdrawalSerializer(serializers.ModelSerializer):
    pending = serializers.SerializerMethodField()
    
    class Meta:
        model = Withdrawal
        fields = '__all__'
    def get_pending(self,obj):
        return obj.pending        
    

class DepositSerializer(serializers.ModelSerializer):
    pending = serializers.SerializerMethodField()
    
    class Meta:
        model = Deposit
        fields = '__all__'
        
    def get_pending(self,obj):
        return obj.pending
