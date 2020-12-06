<template>
  <div id="home">
    <MainDock :dockItem="filterDockItem" @currentIndex="SaveCurrentDockIndex"></MainDock>
    <small-window v-for="(item, index) in filterDockItem"
                  :isShow="index === currentDockItemIndex"
                  @closed="closeAfter"
                  ref="index"
                  @changeLevel="changeLevel(index)"
                  :key="item.itemName"
    >
      <component :is="item.component"></component>
    </small-window>
  </div>
</template>

<script>
//公共
import MainDock from "@/components/content/main-dock/MainDock";
import SmallWindow from "@/components/content/smallwindow/SmallWindow";

//前台
import UserAdministration from "@/views/home/childComponets/font-desk/user-administration/UserAdministration";
import PurchaseRegistration from "@/views/home/childComponets/font-desk/purchase-registration/PurchaseRegistration";
//员工
import ClientInformation from "@/views/home/childComponets/employees/client-information/ClientInformation";
import ProjectFile from "@/views/home/childComponets/employees/project-file/ProjectFile";
import FileUpload from "@/views/home/childComponets/employees/file-upload/FileUpload";
import ProjectExchange from "@/views/home/childComponets/employees/project-exchange/ProjectExchange";
import ProjectInformation from "@/views/home/childComponets/employees/project-information/ProjectInformation";
import SelfInformation from "@/views/home/childComponets/employees/self-information/SelfInformation";
import SystemMessage from "@/views/home/childComponets/employees/system-message/SystemMessage";
//主管
import EmployeesGrade from "@/views/home/childComponets/supervisor/emloyees-grade/EmployeesGrade";
import FileAudit from "@/views/home/childComponets/supervisor/file-Audit/FileAudit";
import LeaveRegistration from "@/views/home/childComponets/supervisor/leave-registration/LeaveRegistration";
import SetNewProject from "@/views/home/childComponets/supervisor/set-new-project/SetNewProject";
import TaskAssignment from "@/views/home/childComponets/supervisor/task-assignment/TaskAssignment";
//老板
import EmployeesAttendance from "@/views/home/childComponets/boss/employees-attendance/EmployeesAttendance";
import PerformanceQueries from "@/views/home/childComponets/boss/performance-queries/PerformanceQueries";
import PerformanceRatio from "@/views/home/childComponets/boss/performance-ratio/PerformanceRatio";
import RegistrationCompletionTime
  from "@/views/home/childComponets/boss/registration-completion-time/RegistrationCompletionTime";
import SalarySetUp from "@/views/home/childComponets/boss/salary-setup/SalarySetUp";
import TimeSetUp from "@/views/home/childComponets/boss/time-setup/TimeSetUp";
import UserRights from "@/views/home/childComponets/boss/user-rights/UserRights";
//客户
import PasswordModify from "@/views/home/childComponets/client/password-modify/PasswordModify";
import ProjectEvaluation from "@/views/home/childComponets/client/project-evaluation/ProjectEvaluation";
import ProjectRecord from "@/views/home/childComponets/client/project-record/ProjectRecord";

export default {
  name: "Home",
  components: {
    //公共组件
    MainDock,
    SmallWindow,
    //前台组件
    UserAdministration,
    PurchaseRegistration,
    //员工组件
    ClientInformation,
    ProjectFile,
    FileUpload,
    ProjectExchange,
    ProjectInformation,
    SelfInformation,
    SystemMessage,
    //主管特有组件
    EmployeesGrade,
    FileAudit,
    LeaveRegistration,
    SetNewProject,
    TaskAssignment,
    //老板特有组件
    EmployeesAttendance,
    PerformanceQueries,
    PerformanceRatio,
    RegistrationCompletionTime,
    SalarySetUp,
    TimeSetUp,
    UserRights,
    //客户组件
    PasswordModify,
    ProjectEvaluation,
    ProjectRecord

  },
  data() {
    return {
      //权限{{0}: 前台小姐姐, {1}:员工 ,{1,2}:主管(包含所有员工功能)}
      dockItem: [
          //***************************前台**************************
          {
        itemName: '用户管理',
        itemImg: require('../../assets/img/dockItemImg/font-desk-img/Employer.png'),
        component: 'UserAdministration',
        role: 0
      }, {
        itemName: '采购登记',
        itemImg: require('../../assets/img/dockItemImg/font-desk-img/project.png'),
        component: 'PurchaseRegistration',
        role: 0
      },

          //*****************************员工********************************
        {
        itemName: '客户信息',
        itemImg: require('../../assets/img/dockItemImg/employees-img/Client.png'),
        component: 'ClientInformation',
        role: 0
      },
        {
          itemName: '项目文件',
          itemImg: require('../../assets/img/dockItemImg/employees-img/projectFile.png'),
          component: 'ProjectFile',
          role: 0
        },
        {
          itemName: '文件上传',
          itemImg: require('../../assets/img/dockItemImg/employees-img/FileUpload.png'),
          component: 'FileUpload',
          role: 0
        },
        {
          itemName: '项目切换',
          itemImg: require('../../assets/img/dockItemImg/employees-img/projectExchange.png'),
          component: 'ProjectExchange',
          role: 0
        },
        {
          itemName: '项目信息',
          itemImg: require('../../assets/img/dockItemImg/employees-img/projectInformation.png'),
          component: 'ProjectInformation',
          role: 0
        },
        {
          itemName: '个人信息',
          itemImg: require('../../assets/img/dockItemImg/employees-img/selfInformation.png'),
          component: 'SelfInformation',
          role: 0
        },
        {
          itemName: '系统消息',
          itemImg: require('../../assets/img/dockItemImg/employees-img/systemMessage.png'),
          component: 'SystemMessage',
          role: 0
        },

          //*******************************主管*****************************
        {
          itemName: '请假登记',
          itemImg: require('../../assets/img/dockItemImg/supervisor-img/leaveRegistration.png'),
          component: 'LeaveRegistration',
          role: 0
        },
        {
          itemName: '文件审核',
          itemImg: require('../../assets/img/dockItemImg/supervisor-img/fileAudit.png'),
          component: 'FileAudit',
          role: 0
        },
        {
          itemName: '员工打分',
          itemImg: require('../../assets/img/dockItemImg/supervisor-img/employeesGrade.png'),
          component: 'EmployeesGrade',
          role: 0
        },
        {
          itemName: '新建项目',
          itemImg: require('../../assets/img/dockItemImg/supervisor-img/setNewProject.png'),
          component: 'SetNewProject',
          role: 0
        },
        {
          itemName: '任务分配',
          itemImg: require('../../assets/img/dockItemImg/supervisor-img/taskAssignment.png'),
          component: 'TaskAssignment',
          role: 0
        },

          //*************************************老板*****************************************************
        {
          itemName: '上下班时间',
          itemImg: require('../../assets/img/dockItemImg/boss-img/timeSetup.png'),
          component: 'TimeSetUp',
          role: 0
        },
        {
          itemName: '绩效比例',
          itemImg: require('../../assets/img/dockItemImg/boss-img/performanceRatio.png'),
          component: 'PerformanceRatio',
          role: 0
        },
        {
          itemName: '员工工资',
          itemImg: require('../../assets/img/dockItemImg/boss-img/salarySetup.png'),
          component: 'SalarySetUp',
          role: 0
        },
        {
          itemName: '用户权限',
          itemImg: require('../../assets/img/dockItemImg/boss-img/userRights.png'),
          component: 'UserRights',
          role: 0
        },
        {
          itemName: '登记时间',
          itemImg: require('../../assets/img/dockItemImg/boss-img/completionTime.png'),
          component: 'RegistrationCompletionTime',
          role: 0
        },
        {
          itemName: '员工考勤',
          itemImg: require('../../assets/img/dockItemImg/boss-img/employeesAttendance.png'),
          component: 'EmployeesAttendance',
          role: 0
        },
        {
          itemName: '业绩查询',
          itemImg: require('../../assets/img/dockItemImg/boss-img/performanceQueries.png'),
          component: 'PerformanceQueries',
          role: 0
        },

        //*************************************客户*****************************************************
        {
          itemName: '项目评价',
          itemImg: require('../../assets/img/dockItemImg/client-img/projectEvaluation.png'),
          component: 'ProjectEvaluation',
          role: 0
        },
        {
          itemName: '项目记录',
          itemImg: require('../../assets/img/dockItemImg/client-img/projectRecord.png'),
          component: 'ProjectRecord',
          role: 0
        },
        {
          itemName: '密码修改',
          itemImg: require('../../assets/img/dockItemImg/client-img/password.png'),
          component: 'PasswordModify',
          role: 0
        },
      ],
      currentDockItemIndex: 999,
    }
  },
  methods: {
    //事件监听
    SaveCurrentDockIndex(index) {
      this.currentDockItemIndex = index
    },
    closeAfter() {
      this.currentDockItemIndex = 999
    },
    changeLevel(index) {
      for (let i = 0; i < this.dockItem.length; i++) {
        if (i !== index) {
          this.$refs.index[i].isLevel = 0
        }
      }
    }
  },
  computed: {
    //根据权限过滤
    filterDockItem() {
      return this.dockItem.filter((item) => {
        return item.role === 0
      })
    }
  },


}
</script>

<style scoped>

</style>
