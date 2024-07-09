from .models import User , Transaction,OTP,Withdrawal,Deposit
from rest_framework import serializers
from django.utils.crypto import get_random_string
class TransactionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Transaction
		fields = '__all__'
class UserSerializer(serializers.ModelSerializer):
	referal_id = serializers.CharField(required = False)
	transaction = TransactionSerializer(many = True,read_only = True)
	class Meta:
		model = User
		
		fields = ('email',
			'username',
			'country',
			'referal_id',
			'password',
			'phone',
			'user_id',
			'total_bonuses',
			'total_withdraw',
			'total_deposit',
			'total_balance',
			'transaction')

		extra_kwargs = {
			'password':{
			'write_only':True
			},
			'user_id':{
			'read_only':True
			},
			'total_balance':{
			'read_only':True
			},
			'total_deposit':{
			'read_only':True
			},
			'total_withdraw':{
			'read_only':True
			},
			'total_bonuses':{
			'read_only':True
			},


		}

	def create(self,validated_data):
		print(validated_data)
		user = User.objects.create_user(**validated_data)
		user.user_id = get_random_string(6)
	
		user.save()
		return user





class LoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()

    
class ProfileEditSerializer(serializers.Serializer):
	username = serializers.CharField(required = False)
	country = serializers.CharField(required = False)
	email = serializers.EmailField(required = False)
	phone = serializers.CharField(required = False)
	
	password = serializers.CharField(required = False)
		


class OTPSerializer(serializers.ModelSerializer):
	class Meta:
		model = OTP
		fields = '__all__'

class WithdrawalSerializer(serializers.ModelSerializer):
	pending = serializers.SerializerMethodField(read_only = True)
	class Meta:
		model = Withdrawal
		fields = '__all__'

		extra_kwargs = {
			"user":{"read_only":True},
			'transaction':{"read_only":True}
		}
	def get_pending(self,obj):
		return obj.pending
	def validate_amount(self,value):
		user = self.context.get("request").user
		if value < 200:
			raise serializers.ValidationError("You can not withdraw less than 200")
		if value >= user.total_balance:
			raise serializers.ValidationError("You can not withdraw more than your balance")
		return value 
	

class DepositSerializer(serializers.ModelSerializer):
	pending = serializers.SerializerMethodField(read_only = True)
	
	class Meta:
		model = Deposit
		fields = '__all__'
		extra_kwargs = {
			"user":{"read_only":True},
			'transaction':{"read_only":True}
		}
	def get_pending(self,obj):
		return obj.pending
	def validate_amount(self,value):
		if value < 200:
			raise serializers.ValidationError("You can't deposit less than $200")
		return value