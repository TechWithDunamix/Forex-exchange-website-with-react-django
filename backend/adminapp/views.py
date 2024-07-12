from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from core.models import User, Plan, Transaction, OTP, Withdrawal, Deposit
from .serializers import UserSerializer, PlanSerializer, TransactionSerializer, OTPSerializer, WithdrawalSerializer, DepositSerializer
class AdminHomeView(GenericAPIView):
    
    def get(self,request,*args,**kwargs):
        pass
class UserListCreateView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        users = self.get_queryset()
        serializer = self.get_serializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetailView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        user = self.get_object(pk)
        if not user:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(user)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        user = self.get_object(pk)
        if not user:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        user = self.get_object(pk)
        if not user:
            return Response(status=status.HTTP_404_NOT_FOUND)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class PlanListCreateView(GenericAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

    def get(self, request, *args, **kwargs):
        plans = self.get_queryset()
        serializer = self.get_serializer(plans, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlanDetailView(GenericAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

    def get_object(self, pk):
        try:
            return Plan.objects.get(pk=pk)
        except Plan.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        plan = self.get_object(pk)
        if not plan:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(plan)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        plan = self.get_object(pk)
        if not plan:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(plan, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        plan = self.get_object(pk)
        if not plan:
            return Response(status=status.HTTP_404_NOT_FOUND)
        plan.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TransactionListCreateView(GenericAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get(self, request, *args, **kwargs):
        transactions = self.get_queryset()
        serializer = self.get_serializer(transactions, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TransactionDetailView(GenericAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get_object(self, pk):
        try:
            return Transaction.objects.get(pk=pk)
        except Transaction.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        transaction = self.get_object(pk)
        if not transaction:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(transaction)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        transaction = self.get_object(pk)
        if not transaction:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(transaction, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        transaction = self.get_object(pk)
        if not transaction:
            return Response(status=status.HTTP_404_NOT_FOUND)
        transaction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class OTPListCreateView(GenericAPIView):
    queryset = OTP.objects.all()
    serializer_class = OTPSerializer

    def get(self, request, *args, **kwargs):
        otps = self.get_queryset()
        serializer = self.get_serializer(otps, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OTPDetailView(GenericAPIView):
    queryset = OTP.objects.all()
    serializer_class = OTPSerializer

    def get_object(self, pk):
        try:
            return OTP.objects.get(pk=pk)
        except OTP.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        otp = self.get_object(pk)
        if not otp:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(otp)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        otp = self.get_object(pk)
        if not otp:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(otp, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        otp = self.get_object(pk)
        if not otp:
            return Response(status=status.HTTP_404_NOT_FOUND)
        otp.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class WithdrawalListCreateView(GenericAPIView):
    queryset = Withdrawal.objects.all()
    serializer_class = WithdrawalSerializer

    def get(self, request, *args, **kwargs):
        withdrawals = self.get_queryset()
        serializer = self.get_serializer(withdrawals, many=True)
        return Response(serializer.data)

    def post(self ,request,id = None ,*args, **kwargs):
        print(id)
        obj = get_object_or_404(Withdrawal,id = id)
        serializer = self.get_serializer(instance=obj)
        obj.transaction.pending = False 
        obj.save()
        obj.transaction.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

class WithdrawalDetailView(GenericAPIView):
    queryset = Withdrawal.objects.all()
    serializer_class = WithdrawalSerializer

    def get_object(self, pk):
        try:
            return Withdrawal.objects.get(pk=pk)
        except Withdrawal.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        withdrawal = self.get_object(pk)
        if not withdrawal:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(withdrawal)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        withdrawal = self.get_object(pk)
        if not withdrawal:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(withdrawal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        withdrawal = self.get_object(pk)
        if not withdrawal:
            return Response(status=status.HTTP_404_NOT_FOUND)
        withdrawal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class DepositListCreateView(GenericAPIView):
    queryset = Deposit.objects.all()
    serializer_class = DepositSerializer

    def get(self, request, *args, **kwargs):
        deposits = self.get_queryset()
        serializer = self.get_serializer(deposits, many=True)
        return Response(serializer.data)

    def post(self, request ,id = None, *args, **kwargs):
        obj = get_object_or_404(Deposit,id = id)
        serializer = self.get_serializer(instance=obj)
        obj.transaction.pending = False 
        obj.save()
        obj.transaction.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

class DepositDetailView(GenericAPIView):
    queryset = Deposit.objects.all()
    serializer_class = DepositSerializer

    def get_object(self, pk):
        try:
            return Deposit.objects.get(pk=pk)
        except Deposit.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        deposit = self.get_object(pk)
        if not deposit:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(deposit)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        deposit = self.get_object(pk)
        if not deposit:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(deposit, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        deposit = self.get_object(pk)
        if not deposit:
            return Response(status=status.HTTP_404_NOT_FOUND)
        deposit.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

